import { Converter, POSClient, use } from '@ramestta/ramajs'
import { Web3ClientPlugin } from '@ramestta/rama-web3'

// install web3 plugin
use(Web3ClientPlugin)

// get rama and ramaPoS clients from ramajs
async function initRama(isMainnet, version, ramaRPC, polygonRPC) {
  const _network = isMainnet ? 'mainnet' : 'testnet'

  const ramaConfig = {
    network: _network,
    version: version,
    parent: {
      provider: polygonRPC,
      defaultConfig: {}
    },
    child: {
      provider: ramaRPC,
      defaultConfig: {}
    },
    rootChainDefaultBlock: 'latest'
  }
  const posClient = new POSClient()
  await posClient.init(ramaConfig)
  return posClient
}

async function convert(value) {
  return Converter.toHex(value)
}

export { initRama, convert }
