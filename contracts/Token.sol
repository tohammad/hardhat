// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >= 0.5.0 < 0.9.0;

contract Token {
    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }
    string public name = "Hardhat Token";
    string public sysmbol = "HHT";
    uint public totalSupply = 10000;
    address public owner;

    mapping(address=> uint) balances;

    function transfer(address to, uint amount) external{
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender]-= amount;
        balances[to]+= amount;

    }

    function balanceOf(address account) external view returns(uint256) {
        return balances[account];
    }
}