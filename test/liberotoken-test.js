// const bytes32 = require('bytes32');
const { inputToConfig } = require("@ethereum-waffle/compiler");
const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("libero testing", function () {

    let libero;
    let ownablee;
    let super_admin;
    let admins = [];
    let user;
    let adminMapping;
    let emptyAddress = "0x0000000000000000000000000000000000000000";

    beforeEach(async function () {
        [super_admin, admins[0], admins[1], admins[2], admins[3], user] = await ethers.getSigners();
        // const LiberoToken = await ethers.getContractFactory("LiberoToken");
        // const liberoToken = await LiberoToken.deploy({ gasLimit: 4100000 });
        // libero = await liberoToken.deployed();

        const Ownable = await ethers.getContractFactory("Ownable");
        const ownable = await Ownable.deploy({ gasLimit: 4100000 });
        ownablee = await ownable.deployed();


    });

    describe("Check supply", function () {
        it("supply", function () {
            console.log("Check", ownablee.address)
        })
    });

});