/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'


export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0xc074c6551a9cB8f63ff3dC2eA9616996db9B4eCF'
export const SLUSH_ADDRESS = '0xb9c6acfaf5cb0580476a0b609d8c4f64a8c793ce'
export const ICE_ADDRESS = Address.fromString('0x55cba56adc37639dbcda1d88c245a9544753441e')

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export let pools_list = [""]