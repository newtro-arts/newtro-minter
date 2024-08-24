import { getFrameMetadata } from 'frog/next'
import MinterPage from '@/components/MinterPage'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const url = process.env.FRAME_URL || 'http://localhost:3000'
  const frameMetadata = await getFrameMetadata(`${url}/api`)
  return {
    other: frameMetadata,
  }
}

const Page = () => <MinterPage />

export default Page
