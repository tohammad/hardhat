const {expect} = require('chai');
const { ethers } = require('hardhat');

describe("Token contract", () => {
    it("Deployment should assign the total supply of tokens to the owner", async() => {
        const [owner] = await ethers.getSigners();
        //console.log(`Signers: ${JSON.stringify(owner)}`);

        const Token = await ethers.getContractFactory("Token")
        const hardhatToken = await Token.deploy();
        const ownerBalance = await hardhatToken.balanceOf(owner.address);

        //console.log(`owner address: ${owner.address}`);

        expect (await hardhatToken.totalSupply()).to.equal(ownerBalance);

    }); 
    it("Should transfer token between accounts", async() => {
        const [owner, addr1, addr2] = await ethers.getSigners();
        console.log(`Signers: ${JSON.stringify(owner)}`);

        const Token = await ethers.getContractFactory("Token")
        const hardhatToken = await Token.deploy();
        await hardhatToken.transfer(addr1.address, 10);
        expect (await hardhatToken.balanceOf(addr1.address)).to.equal(10);

        await hardhatToken.connect(addr1).transfer(addr2.address, 5);
        expect (await hardhatToken.balanceOf(addr2.address)).to.equal(5);

    }); 
})