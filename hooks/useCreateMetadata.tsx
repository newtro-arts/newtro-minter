import { DEFAULT_ANIMATION_URI, DEFAULT_IMAGE_URI } from '@/lib/consts'
import { uploadJson } from '@/lib/ipfs/uploadJson'
import { useState } from 'react'

const useCreateMetadata = () => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [saleStrategy, setSaleStrategy] = useState<string>('ZoraTimedSaleStrategy')
  const [imageUri, setImageUri] = useState<string>(DEFAULT_IMAGE_URI)
  const [mimeType, setMimeType] = useState<string>('')
  const [animationUri, setAnimationUri] = useState<string>()
  const imageUploaded = DEFAULT_IMAGE_URI !== imageUri
  const animationUploaded = DEFAULT_ANIMATION_URI !== animationUri

  const getUri = async () => {
    const metadataJson = {
      name,
      description,
      image: imageUri,
      animation_url: animationUri,
      content: {
        mime: animationUri ? 'audio/mpeg' : 'image/png',
        uri: animationUri || imageUri,
      },
    }
    if (animationUri) metadataJson.animation_url = animationUri
    return await uploadJson(metadataJson)
  }

  return {
    animationUri,
    setAnimationUri,
    animationUploaded,
    description,
    setDescription,
    getUri,
    imageUploaded,
    imageUri,
    setImageUri,
    mimeType,
    setMimeType,
    name,
    saleStrategy,
    setName,
    setSaleStrategy,
  }
}

export default useCreateMetadata
