import { config } from 'dotenv'

config()

const debug = process.env.NODE_ENV !== 'production'
export default {
  app: {
    name: process.env.NAME || 'Proof Generation API For Ramestta',
    port: parseInt(process.env.PORT || 5000, 10),
    maticRPC: JSON.parse(process.env.MATIC_RPC),
    mumbaiRPC: JSON.parse(process.env.MUMBAI_RPC),
    ramaRPC: JSON.parse(process.env.RAMESTTA_RPC),
    pingakshaRPC: JSON.parse(process.env.PINGAKSHA_RPC)
  },
  debug: debug,
  mainnetRpcIndex: 0,
  testnetRpcIndex: 0,
  sentry: {
    dsn: process.env.SENTRY_DSN
  }
}
