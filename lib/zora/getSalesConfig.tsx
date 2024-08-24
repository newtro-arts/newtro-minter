import { FixedPriceParamsType, TimedSaleParamsType } from '@zoralabs/protocol-sdk'

const getSalesConfig = (saleStrategy: string) => {
  const ONE_HOUR = 60 * 60
  const ONE_DAY = 24 * ONE_HOUR
  const ONE_MONTH = 30 * ONE_DAY
  const thirtyDaysFromNow = BigInt(Math.floor(Date.now() / 1000) + ONE_MONTH)

  const timedSaleConfig = {
    type: 'timed',
    erc20Name: 'CC0 Music',
    erc20Symbol: 'CC0',
  } as TimedSaleParamsType
  const fixedPriceSaleConfig = {
    type: 'fixedPrice',
    pricePerToken: BigInt(0),
    saleEnd: thirtyDaysFromNow,
  } as FixedPriceParamsType
  return saleStrategy === 'ZoraTimedSaleStrategy' ? timedSaleConfig : fixedPriceSaleConfig
}

export default getSalesConfig
