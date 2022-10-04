require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();

deployAccountKey = process.env.DEPLOY_ACCOUNT_KEY;
module.exports = {
  solidity: "0.8.16",
  networks: {
  	goerli: {
      accounts: [deployAccountKey],
      chainId: 5,
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      timeout: 200000,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
};