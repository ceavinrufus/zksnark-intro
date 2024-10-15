# Hardhat Project: Deploying `Lock.js` using Ignition

This guide explains how to deploy the `Lock.js` file using Hardhat's Ignition module across different operating systems: **Windows**, **Linux**, and **macOS**. Additionally, it covers the setup for securely handling private keys using environment variables.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can verify this with:
  ```bash
  node -v
  npm -v
  ```

- **Hardhat**: Install Hardhat globally if you haven't already:
  ```bash
  npm install --save-dev hardhat
  ```

- **Ignition Plugin**: Ensure you have the Hardhat Ignition module installed in your project:
  ```bash
  npm install @nomicfoundation/hardhat-ignition --save-dev
  ```

## Environment Setup for Secure Private Key Handling

You will need to set up an environment variable for your **private key**. The private key is necessary to sign transactions during the deployment process. We will use the `dotenv` package to securely store the private key in an `.env` file.

### 1. Install `dotenv`
```bash
npm install dotenv --save
```

### 2. Create an `.env` File
At the root of your project, create a file named `.env`. Add your private key to this file:
```plaintext
WALLET_PRIVATE_KEY=your-private-key-here
```

### 3. Load `.env` in `hardhat.config.js`
Add the following to the top of your `hardhat.config.js` file to load environment variables using `dotenv`:

```javascript
require("dotenv").config();
module.exports = {
  solidity: "0.8.27",
  networks: {
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
};
```

### Security Note:
- **Never commit** your `.env` file to version control (e.g., GitHub). Add the `.env` file to your `.gitignore` to prevent accidental exposure of your private key.
  ```plaintext
  .env
  ```

## Deploying with Hardhat Ignition

### Deploy Command

To deploy the `Lock.js` file using the Ignition module, run the following command:

```bash
npx hardhat ignition deploy ./ignition/modules/Lock.js --network <network-name>
```

Replace `<network-name>` with the appropriate network defined in your `hardhat.config.js`, such as `polygonzkEVM` (mainnet) or `polygonzkEVMCardona` (testnet).

Deploying to either of the aforementioned networks needs some ETH to cover the gas fees, and as such, you will need some.

For PolygonzkEVM Cardona (Testnet), you can get some from the [Polygon Faucet](https://faucet.polygon.technology/). Be sure to have `Polygon zkEVM (Cardona)` selected from the drop-down menu, and connect your Discord using the button on the
top-right corner of the screen that says, `Connect Discord`.

### Deployment on Different Operating Systems

#### On Windows:
1. **Install Git Bash**: Use **Git Bash** for Unix-like shell commands. You can also use **PowerShell** or **Command Prompt**, but ensure the path formatting uses backslashes (`\`).
2. **Run the Deployment Command**:
   ```bash
   npx hardhat ignition deploy ignition\modules\Lock.js --network polygonzkEVMCardona
   ```

#### On Linux and macOS:
- Use the default Unix-like shell. Run the command with forward slashes (`/`):
  ```bash
  npx hardhat ignition deploy ./ignition/modules/Lock.js --network polygonzkEVMCardona
  ```

## Troubleshooting

- **Missing Private Key**: If the private key is not set up correctly in the `.env` file, you might see an error related to missing accounts. Double-check the `.env` file and ensure it's loaded with `dotenv`.
- **RPC URL Error**: Ensure you have the correct RPC URL for the desired network (e.g., Polygon zkEVM or Cardano zkEVM). If you are using a service like **Alchemy** or **Infura**, verify the endpoint URL.

## Verifying the Deployment

Once the contract is deployed, you can verify the deployment by checking the contract address printed in the terminal. Use a block explorer like **PolygonScan** for Polygon zkEVM to confirm the deployment.

For PolygonZkEMVM Cardona (Testnet), you can use [PolygonzkEMVCardona Block Explorer](https://cardona-zkevm.polygonscan.com/)

For For PolygonZkEMVM (Mainnet), you can use [PolygonzkEMV Block Explorer](https://zkevm.polygonscan.com/)