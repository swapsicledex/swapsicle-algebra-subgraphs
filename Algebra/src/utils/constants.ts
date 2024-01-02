/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'


export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x2746B1a7B780f128F0db99d9fc60C2DB3E4a7bd5'
export const SLUSH_ADDRESS = '0x6f1eb479c68e9749dd1531cd8ae1a25a53f8cda2'
export const ICE_ADDRESS = Address.fromString('0xe77de2c82c9e6fa0056bc91fb5d67e140867bd44')

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export let pools_list = [""]