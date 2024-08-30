/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'


export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0xBa90FC740a95A6997306255853959Bb284cb748a'
export const SLUSH_ADDRESS = '0x36BFE1F1b36CfdB4fe75cC592FF5dC6200Ad3E0f'
export const ICE_ADDRESS = Address.fromString('0x0c4e57A3a3EF4790C4848a711851DC08e8A16dA7')

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export let pools_list = [""]