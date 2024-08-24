import { baseSepolia } from 'viem/chains'
import CreateButton from '../CreateButton'

const CreateButtons = () => (
  <div className="mt-11 flex w-full justify-center">
    <CreateButton chainId={baseSepolia.id}>PUBLISH</CreateButton>
  </div>
)

export default CreateButtons
