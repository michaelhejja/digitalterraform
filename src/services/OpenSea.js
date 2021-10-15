import Web3 from '@/utils/web3'
import { OpenSeaPort } from 'opensea-js'

class OpenSeaService {
  // This example provider won't let you make transactions, only read-only calls:
  // provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

  seaport = new OpenSeaPort(window.ethereum, {
    networkName: 'rinkeby'
  })

  getAsset = async function (tokenAddress, tokenId) {
    const asset = await this.seaport.api.getAsset({
      tokenAddress, // string
      tokenId // string | number | null
    })
    return asset
  }

  getAccount = async function () {
    const web3 = await Web3()
    if (!web3) {
      return undefined
    }
    const accounts = await web3.eth.getAccounts()
    return (accounts && accounts.length > 0) ? accounts[0] : undefined
  }
}

export default OpenSeaService
