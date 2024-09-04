/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'


export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x597502d47b0321de8a099f0bacc769bae35da312'
export const SLUSH_ADDRESS = '0x36bfe1f1b36cfdb4fe75cc592ff5dc6200ad3e0f'
export const ICE_ADDRESS = Address.fromString('0x0c4e57a3a3ef4790c4848a711851dc08e8a16da7')

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export let pools_list = [""]