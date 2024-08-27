import {
  IncreaseLiquidity,
  DecreaseLiquidity,
  NonfungiblePositionManager,
  Transfer
} from '../types/NonfungiblePositionManager/NonfungiblePositionManager'
import {  Deposit } from '../types/schema'
import { BigInt, Address } from '@graphprotocol/graph-ts'
import { loadTransaction } from '../utils'

export function handleIncreaseLiquidity(event: IncreaseLiquidity): void {
  let transaction = loadTransaction(event)
  let entity = Deposit.load(event.params.tokenId.toString())

  if (entity == null) {
    entity = new Deposit(event.params.tokenId.toString())
    entity.owner = event.transaction.from
    entity.pool = event.params.pool
    entity.liquidity = BigInt.fromString("0")
    entity.rangeLength = getRangeLength(event.params.tokenId, event.address)
  }
  entity.timestamp = transaction.timestamp
  entity.transaction = transaction.id
  entity.liquidity = entity.liquidity.plus(event.params.liquidity)
  entity.save()

}

export function handleDecreaseLiquidity(event: DecreaseLiquidity): void {
  let deposit = Deposit.load(event.params.tokenId.toString())
  if (deposit == null) return

  let transaction = loadTransaction(event)
  deposit.liquidity = deposit.liquidity.minus(event.params.liquidity)
  deposit.timestamp = transaction.timestamp
  deposit.transaction = transaction.id
  deposit.save()
}


export function handleTransfer(event: Transfer): void {
  let entity = Deposit.load(event.params.tokenId.toString())
  if (entity == null) return

  let transaction = loadTransaction(event)
  entity.owner = event.params.to
  entity.timestamp = transaction.timestamp
  entity.transaction = transaction.id
  entity.save() 
}

function getRangeLength(tokenId: BigInt, eventAddress: Address): BigInt {
  let contract = NonfungiblePositionManager.bind(eventAddress)
  let positionCall = contract.try_positions(tokenId)

  // the following call reverts in situations where the position is minted
  // and deleted in the same block 
  const stringBoolean = `${positionCall.reverted}`
  if (!positionCall.reverted) {
    let positionResult = positionCall.value
    return BigInt.fromI32(positionResult.value5 - positionResult.value4)
  } else {
    return BigInt.fromString('0')
  }
}