require("@nomicfoundation/hardhat-toolbox");
require("hardhat-circom");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    // https://docs.polygon.technology/zkEVM/overview/
    polygonzkEVMCardona: {
      url: 'https://rpc.cardona.zkevm-rpc.com',
      accounts: [process.env.WALLET_PRIVATE_KEY],
      chainId: 2442,
    },
    polygonzkEVM: {
      url: 'https://zkevm-rpc.com',
      accounts: [process.env.WALLET_PRIVATE_KEY],
      chainId: 1101,
    },
  },
  circom: {
    inputBasePath: "./circuits",
    ptau: "./powersOfTau28_hez_final_15.ptau",
    circuits: [
      {
        name: "ageCheck",
        verbose: true,
      },
    ],
  },
};
