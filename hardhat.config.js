require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
/**
 * @type import('hardhat/config').HardhatUserConfig
 */


deployAccountKey = process.env.DEPLOY_ACCOUNT_KEY;
const alchemyapi = process.env.ALCHEMY_API_KEY;
module.exports = {
  solidity: "0.8.16",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      gasPrice: 470000000000,
      chainId: 31337,
    },
    mainnet: {
      accounts: [deployAccountKey],
      chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyapi}`,
      timeout: 200000,
    },
  	goerli: {
      accounts: [deployAccountKey],
      chainId: 5,
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      timeout: 200000,
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      gas: 6000000,
      accounts: [deployAccountKey],
    },
    arbitrumOne: {
      accounts: [deployAccountKey],
      chainId: 42161,
      url: 'https://arb1.arbitrum.io/rpc',
      timeout: 200000,
    },
    arbitrumGoerli: {
      accounts: [deployAccountKey],
      chainId: 421613,
      url: `https://arb-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      timeout: 200000,
    },
    
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY
  }
};