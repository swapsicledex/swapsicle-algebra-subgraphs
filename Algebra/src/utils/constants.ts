/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'


export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x2746B1a7B780f128F0db99d9fc60C2DB3E4a7bd5'
export const SLUSH_ADDRESS = '0xB4A11f5A1ce1cF06a6468D95c52832A77a37904B'
export const ICE_ADDRESS = Address.fromString('0x20354578aA6963395ae709e8D9CbDD0A5C6251db')

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export let pools_list = [""]