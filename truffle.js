const HDWalletProvider = require("truffle-hdwallet-provider");
MNENOMIC = "infant equip coach salute badge increase feel install good wasp student ladder"
INFURA_API_KEY = "099d1bf4a64847f1a9ed28288d6ae43f"

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      gas: 2000000,
      gasPrice: 21,
      network_id: '*' // Match any network id
    },
    // testnets
    // properties
    // network_id: định nghĩa từ vào network
    // gas: gas limit
    // gasPrice: gas price in gwei
    ropsten: {
      provider: () => new HDWalletProvider( MNENOMIC, "https://ropsten.infura.io/v3/" +  INFURA_API_KEY),
      network_id: 3,
      gas: 470000,
      gasPrice: 21
    },
    kovan: {
      provider: () => new HDWalletProvider( MNENOMIC, "https://kovan.infura.io/v3/" +  INFURA_API_KEY),
      network_id: 42,
      gas: 470000,
      gasPrice: 21
    },
    rinkeby: {
      provider: () => new HDWalletProvider( MNENOMIC, "https://rinkeby.infura.io/v3/" +  INFURA_API_KEY),
      network_id: 4,
      gas: 2000000,
      gasPrice: 21
    },
    // main ethereum network(mainnet)
    main: {
      provider: () => new HDWalletProvider( MNENOMIC, "https://mainnet.infura.io/v3/" +  INFURA_API_KEY),
      network_id: 1,
      gas: 470000,
      gasPrice: 21
    }
  }
}