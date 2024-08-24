import { useZoraCreateProvider } from '@/providers/ZoraCreateProvider'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'

const Description = () => {
  const { name, setName } = useZoraCreateProvider()

  return (
      <div className='flex flex-col'>
        <h3 className='font-ibmPlexMono text-[#D1F121] text-[9px] text-left'>Description</h3>
        <Textarea value={name} onChange={(e) => setName(e.target.value)} />
      </div>

  )
}

export default Description
