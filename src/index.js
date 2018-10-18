const script = require('./script')
const SafeBuffer = require('safe-buffer').Buffer
const secp256k1 = require('secp256k1')
const varuint = require('varuint-bitcoin')

module.exports = {
  Block: require('./block'),
  ECPair: require('./ecpair'),
  Transaction: require('./transaction'),
  TransactionBuilder: require('./transaction_builder'),

  address: require('./address'),
  bip32: require('bip32'),
  bip39: require('bip39'),
  bip65: require('bip65'),
  crypto: require('./crypto'),
  networks: require('./networks'),
  opcodes: require('bitcoin-ops'),
  payments: require('./payments'),
  SafeBuffer: SafeBuffer,
  varuint: varuint,
  secp256k1: secp256k1,
  script: script
}
