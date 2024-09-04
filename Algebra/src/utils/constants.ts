/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x10253594a832f967994b44f33411940533302acb'
export const SLUSH_ADDRESS = '0x36bfe1f1b36cfdb4fe75cc592ff5dc6200ad3e0f'
export const ICE_ADDRESS = Address.fromString('0x0c4e57a3a3ef4790c4848a711851dc08e8a16da7')
export const WNATIVE_ADDRESS = '0xb1eda18c1b730a973dac2ec37cfd5685d7de10dd'
export const USDC_ADDRESS = '0xbb74689297a783eeffaefcc1334939e19f139c86'
export const USDT_ADDDRESS = '0x3c8d3fcd0b0bd6f46c8883db5d14a8f510a4591d'
export const USDC_WNATIVE_POOL = '0xfdbcb43134320667f42dd9829a5cb43ace25bbf1'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export let pools_list = [""]