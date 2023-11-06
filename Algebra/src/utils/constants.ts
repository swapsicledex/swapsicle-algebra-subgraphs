/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'


export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0xC848bc597903B4200b9427a3d7F61e3FF0553913'
export const SLUSH_ADDRESS = '0x8309bc8bb43fb54db02da7d8bf87192355532829'
export const ICE_ADDRESS = Address.fromString('0x005e16eccdfd3ea76e7b777a1beb7b826e3aa7e3')

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export let pools_list = [""]