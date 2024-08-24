import Animation from './Animation'
import CreateButtons from './CreateButtons'
import Description from './Description'
import SaleStrategySwitch from './SaleStrategySwitch'
import Title from './Title'

const Details = () => (
  <div className="gap-1 text-center items-center flex flex-col">
    <SaleStrategySwitch />
    <Title />
    <Description />
    <Animation />
    <CreateButtons />
  </div>
)

export default Details
