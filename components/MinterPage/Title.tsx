import { useZoraCreateProvider } from '@/providers/ZoraCreateProvider'
import { Input } from '../ui/Input'

const Title = () => {
  const { name, setName } = useZoraCreateProvider()

  return (
    <div className='flex flex-col w-full'>
        <h3 className='font-ibmPlexMono text-[#D1F121] text-[9px] text-left w-full'>Title</h3>
        <Input className='mb-2 w-full' value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default Title
