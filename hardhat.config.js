require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();

deployAccountKey = process.env.DEPLOY_ACCOUNT_KEY;
const alchemyapi = process.env.ALCHEMY_API_KEY;
module.exports = {
  solidity: "0.8.16",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
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
    apiKey: process.env.ARBITRUM_API_KEY
  }
};