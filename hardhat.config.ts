/** @type import('hardhat/config').HardhatUserConfig */

import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-chai-matchers';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';

const COMPILER_SETTINGS = {
  optimizer: {
    enabled: false,
    runs: 1000,
  },
  settings: {
    viaIR: true,
  },
  viaIR: true,

};

module.exports = {
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  namedAccounts: {
    deployer: 0,
    dev: 1,
    user1: 2,
    user2: 3
  },
  networks: {
    hardhat: {
      mining: {
        auto: true,
        interval: 5000
      }
    }
  }
};
