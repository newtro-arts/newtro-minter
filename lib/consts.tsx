import { Address } from 'viem'
import { arbitrum, baseSepolia } from 'wagmi/chains'

export const IS_TESTNET = process.env.NEXT_PUBLIC_TEST === 'true'
export const CHAIN = IS_TESTNET ? baseSepolia : arbitrum
export const CHAIN_ID = CHAIN.id

// Zora
export const DROP_ADDRESS = IS_TESTNET
  ? '0x54f038c3c9E643D08d1e385833CD80AAdC62C54c' // base sepolia
  : '0x765cee6ff107f2b8c20c71ac34ff38776fd39d3e' // arbitrum one
export const ZORA_PRICE = '777000000000000'
export const COMMENT = 'myco.wtf'
export const REFERRAL_RECIPIENT = '0x749B7b7A6944d72266Be9500FC8C221B6A7554Ce' as Address

// STACK EVENTS
export const FIRST_SMART_WALLET_LOGIN_EVENT = 'first_smart_wallet_login'
export const SETUP_NEW_CONTRACT_EVENT = 'setup_new_contract'
export const SMART_WALLET_LOGIN_POINT = 11
export const SETUP_NEW_CONTRACT_POINT = 55

// IPFS
export const DEFAULT_IMAGE_URI =
  'ipfs://bafkreic3cefqzzqhoc34e2dqqfgtctmfc7mdgcfbapizpjrlroutfzilci'
export const DEFAULT_ANIMATION_URI =
  'ipfs://bafybeicpnghwsq5xyaej4hi6vuxoi4oxplll3wfhurf2v6y6kfctrtintq'
export const ONE_MB = 1024 * 1024
export const MAX_FILE_SIZE = 5 * ONE_MB
