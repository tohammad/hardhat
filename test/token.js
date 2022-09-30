const {expect} = require('chai');
const { ethers } = require('hardhat');

describe("Token contract", () => {
    it("Deployment should assign the total supply of tokens to the owner", async() => {
        const [owner] = await ethers.getSigners();
        console.log(`Signers: ${JSON.stringify(owner)}`);

        const Token = await ethers.getContractFactory("Token")
        const hardhatToken = await Token.deploy();
        const ownerBalance = await hardhatToken.balanceOf(owner.address);

        console.log(`owner address: ${owner.address}`);

        expect (await hardhatToken.totalSupply()).to.equal(ownerBalance);

    }); 
})