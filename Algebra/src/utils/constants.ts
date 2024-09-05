/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0xC848bc597903B4200b9427a3d7F61e3FF0553913'

export const USDC_WNATIVE_POOL = '0x84ec2a3907ed9e79c7a45551fef9da29d5f2ae9b'

export const SLUSH_ADDRESS = '0x8309bc8bb43fb54db02da7d8bf87192355532829'
export const ICE_ADDRESS = Address.fromString('0x005e16eccdfd3ea76e7b777a1beb7b826e3aa7e3')
export const WNATIVE_ADDRESS = '0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8'
export const USDC_ADDRESS = '0x09bc4e0d864854c6afb6eb9a9cdf58ac190d0df9'
export const USDT_ADDDRESS = '0x201eba5cc46d216ce6dc03f6a759e8e766e956ae'
export const MUSD_ADDRESS = '0xab575258d37eaa5c8956efabe71f4ee8f6397cf3'
export const CUSD_ADDRESS = '0x62959ad021402f48d0d8067bc5c4c03f63fceaa4'
export const LEND_ADDRESS = '0x25356aeca4210ef7553140edb9b8026089e49396'
export const WBTC_ADDRESS = '0xcabae6f6ea1ecab08ad02fe02ce9a44f09aebfa2'
export const WETH_ADDRESS = '0xdeaddeaddeaddeaddeaddeaddeaddeaddead1111'
export const METH_ADDRESS = '0xcda86a272531e8640cd7f1a92c01839911b90bb0'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export let pools_list = [""]