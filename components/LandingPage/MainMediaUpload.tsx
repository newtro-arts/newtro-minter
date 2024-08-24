import UploadIcon from '../Icons/UploadIcon'
import { useZoraCreateProvider } from '@/providers/ZoraCreateProvider'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import useFileUpload from '@/hooks/useFileUpload'
import { cn } from '@/lib/utils'

const MainMediaUpload = () => {
  const { imageUploaded, imageUri } = useZoraCreateProvider()
  const { fileUpload, loading, error } = useFileUpload()

  return (
    <div className="grid w-full max-w-sm items-center gap-4">
      <div
        className={cn(
          'w-full h-48 relative flex flex-col items-center justify-center space-y-2 text-muted-foreground rounded-tl-xl rounded-br-xl',
          (loading || !imageUploaded) && 'border-2 border-[#D1F121] rounded-tl-xl rounded-br-xl',
        )}
      >
        <input
          id="image"
          type="file"
          className="absolute inset-0 z-10 opacity-0 cursor-pointer"
          onChange={fileUpload}
        />

        {loading ? (
          <div className="w-8 h-8 border-2 border-black rounded-full animate-spin" />
        ) : imageUploaded ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getIpfsLink(imageUri)}
            className=" border-[#d1f121] rounded-md h-full mx-auto"
            alt="Image Preview"
          />
        ) : (
          <>
            <UploadIcon className="w-8 h-8 text-[#d1f121]" />
            <p className="text-sm font-light text-[#D1F121]"></p>
          </>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  )
}

export default MainMediaUpload
