const { ethers } = require("hardhat");

const main = async () => {
  const [deployer] = await ethers.getSigners();
  const token = await ethers.getContractFactory("Token");
  const hardhatToken = await token.deploy();

  console.log("Token Address %s", hardhatToken.address);
};

main()
  .then(() => process.exit(0))
  .catch((err) => console.error(err));
