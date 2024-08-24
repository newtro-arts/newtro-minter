import { useZoraCreateProvider } from '@/providers/ZoraCreateProvider'
import { Switch } from '../ui/Switch'

const SaleStrategySwitch = () => {
  const { setSaleStrategy } = useZoraCreateProvider()

  const handleChange = (isFixed) => {
    setSaleStrategy(isFixed ? 'ZoraFixedPriceSaleStrategy' : 'ZoraTimedSaleStrategy')
  }

  return <Switch onCheckedChange={handleChange} className="bg-[#D1F121] my-2" />
}

export default SaleStrategySwitch
