import Animation from './Animation'
import CreateButtons from './CreateButtons'
import Description from './Description'
import SaleStrategySwitch from './SaleStrategySwitch'
import Title from './Title'

const Details = () => (
  <div className="gap-1 text-center items-center flex flex-col w-full mx-auto max-w-[400px]">
    <SaleStrategySwitch />
    <Title />
    <Description />
    <Animation />
    <CreateButtons />
  </div>
);

export default Details;
