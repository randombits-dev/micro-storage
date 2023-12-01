import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {ethers} from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {execute} = deployments;

  const {deployer, user1} = await getNamedAccounts();

  await execute('USDC', {from: user1}, 'giveMe', ethers.parseUnits('100', 6));

  // await execute('MicroStorage', {from: deployer}, 'setLimits', 1, 2, 4);
};
export default func;
func.tags = ['Test'];
