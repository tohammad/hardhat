/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
const ALCHEMY_API_KEY = "";
const GOERLI_PRIVATE_KEY = "";
module.exports = {
  solidity: "0.8.17",
  networks: {
    GOERLI: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`],
    }
  }
};
