import {
  goerli,
  mainnet,
  optimism,
  polygon,
  polygonMumbai,
  sepolia,
  baseSepolia,
  optimismSepolia,
  base,
  arbitrum,
} from 'viem/chains'

const getViemNetwork = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
      return mainnet
    case arbitrum.id:
      return arbitrum
    case polygon.id:
      return polygon
    case base.id:
      return base
    case optimism.id:
      return optimism
    case goerli.id:
      return goerli
    case polygonMumbai.id:
      return polygonMumbai
    case sepolia.id:
      return sepolia
    case baseSepolia.id:
      return baseSepolia
    case optimismSepolia.id:
      return optimismSepolia
    default:
      return mainnet
  }
}

export default getViemNetwork
