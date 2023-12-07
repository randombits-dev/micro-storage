import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {encodeBytes32String} from 'ethers';
import {defaultAbiCoder} from '@ethersproject/abi';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts, ethers} = hre;
  const {deploy, get, execute} = deployments;

  const {deployer, dev} = await getNamedAccounts();
  const usdc = await get('USDC');

  await deploy('MicroConsumer', {
    contract: 'MicroConsumer',
    from: deployer,
    args: [],
    log: true,
  });

  const linkResult = await deploy('MockLinkToken', {
    contract: 'MockLinkToken',
    from: deployer,
    args: [],
    log: true,
  });

  const aggregatorResult = await deploy('MockV3Aggregator', {
    contract: 'MockV3Aggregator',
    from: deployer,
    args: [18, BigInt('1000000000000000')],
    log: true,
  });

  const routerResult = await deploy('FunctionsRouter', {
    contract: 'FunctionsRouter',
    from: deployer,
    args: [linkResult.address, {
      maxConsumersPerSubscription: 100,
      adminFee: 0,
      handleOracleFulfillmentSelector: '0x0ca76175', // handleOracleFulfillment(bytes32 requestId, bytes memory response, bytes memory err)
      gasForCallExactCheck: 5000,
      maxCallbackGasLimits: [300_000, 500_000, 1_000_000],
      subscriptionDepositMinimumRequests: 0,
      subscriptionDepositJuels: 0,
    }],
    log: true,
  });

  const storageResult = await deploy('MicroStorage', {
    contract: 'MicroStorage',
    from: deployer,
    args: [usdc.address, routerResult.address, BigInt(1), encodeBytes32String('local-functions-testnet'),
      '0xd70df55841917793295276a07909f7080303d54fc46271d5b1d3a81018c8deedd04d0975c555e3aa90605d559ded4e791581b2927763409e9b13814ac2617d19a177052153c4082133e162f7af8f60ac37f9727f87820e7e0376b508ce44c5a9c94b3ccc0d14958607bfafff4f1c63fe0a6db44ccdcb298b709681d61521cb26897c0015d542c6de6b3b8d305def933aceb587cdeb15b758317ce6c3bd4f26b51e'],
    log: true,
  });

  const coordinatorResult = await deploy('FunctionsCoordinatorTestHelper', {
    contract: 'FunctionsCoordinatorTestHelper',
    from: deployer,
    args: [routerResult.address, {
      maxCallbackGasLimit: 1_000_000,
      feedStalenessSeconds: 86_400,
      gasOverheadBeforeCallback: 44_615,
      gasOverheadAfterCallback: 44_615,
      requestTimeoutSeconds: 0, // 300 is used on actual mainnet & testnet blockchains
      donFee: 0,
      maxSupportedRequestDataVersion: 1,
      fulfillmentGasPriceOverEstimationBP: 0,
      fallbackNativePerUnitLink: BigInt('5000000000000000'),
    }, aggregatorResult.address],
    log: true,
  });

  const tosResult = await deploy('TermsOfServiceAllowList', {
    contract: 'TermsOfServiceAllowList',
    from: deployer,
    args: [{
      enabled: false,
      signerPublicKey: '0x0000000000000000000000000000000000000000',
    }],
    log: true,
  });

  await execute('FunctionsRouter', {from: deployer}, 'createSubscriptionWithConsumer', storageResult.address);
  await execute('FunctionsRouter', {from: deployer}, 'setAllowListId', encodeBytes32String('allowlist'));
  await execute('FunctionsRouter', {from: deployer}, 'proposeContractsUpdate', [encodeBytes32String('allowlist'),
    encodeBytes32String('local-functions-testnet')], [tosResult.address, coordinatorResult.address]);
  await execute('FunctionsRouter', {from: deployer}, 'updateContracts');

  await execute('MockLinkToken', {from: deployer}, 'setBalance', deployer, ethers.parseEther('200'));
  await execute('MockLinkToken', {from: deployer}, 'transferAndCall', routerResult.address, ethers.parseEther('100'),
    defaultAbiCoder.encode(['uint64'], [1]));

  await execute('FunctionsCoordinatorTestHelper', {from: deployer}, 'setDONPublicKey',
    '0x46e62235e8ac8a4f84aa62baf7c67d73a23c5641821bab8d24a161071b90ed8295195d81ba34e4492f773c84e63617879c99480a7d9545385b56b5fdfd88d0da');

  const thresholdKey = '0x' + Buffer.from(
    '{"Group":"P256","G_bar":"BLCl28PjjGt8JyL/p6AHToD6265gEBfl12mBiCVZShSPHVwvx5GwJ0QMqpQ7yPZEM8E6U015XFHvsDuq8X/S/c8=","H":"BEDshIeMEgr2kjNdjkG12M0A9P0uwg5Hl7jbKjbIcweHi07tu8rITgMZ9dTfqLhtFu+cRwwZaLLZdhqdg1JyLYY=","HArray":["BCj9afGghnfy3Nubj7onMPkApbF9r4GbLvSSi1wrQ1uMwRYMr6DCt5RCm95vKx75JPuOFdKBkBTOpX4p5Dtt0l0=","BJCmC0+jkl/WTK8sfb6ulQjBWTZnQEasPRVdCIYv94RkZWfVk6CbFS2Dv9C090He4UaYBaOGGyw7HGAtqKUqX1Y=","BPPnFxrq+9VI8Bb6KUBJalt/EZdU+G/l4iyosvB5bulwWDxJ26mw3hJZtZfjUcJPGIajabNFOa+5pVBd6Y3oGB8=","BJ1tWD2RhKB/uQEJ1x54mBddAW0KoFghplSswp/F3BYksyZIRIhEiLDsNgw3NfhmQh2OR6Vgv4APqAt9+RKxzzk="]}')
    .toString('hex');
  await execute('FunctionsCoordinatorTestHelper', {from: deployer}, 'setThresholdPublicKey', thresholdKey);

  // await execute('MicroConsumer', {from: deployer}, 'transferOwnership', storageResult.address);
  await execute('MicroStorage', {from: deployer}, 'changeDevAddress', dev);

  hre.ethers.getContract('FunctionsCoordinatorTestHelper').then((coordinator) => {
    coordinator.on('OracleRequest', async (requestId,
                                           requestingContract,
                                           requestInitiator,
                                           subscriptionId,
                                           subscriptionOwner,
                                           data,
                                           dataVersion,
                                           flags,
                                           callbackGasLimit,
                                           commitment,) => {
      console.log('OracleRequest', data);

      try {
        const encodedCommitment = defaultAbiCoder.encode(
          [
            'bytes32',
            'address',
            'uint96',
            'address',
            'uint64',
            'uint32',
            'uint72',
            'uint72',
            'uint40',
            'uint40',
            'uint32',
          ],
          [
            commitment.requestId,
            commitment.coordinator,
            commitment.estimatedTotalCostJuels,
            commitment.client,
            commitment.subscriptionId,
            commitment.callbackGasLimit,
            commitment.adminFee,
            commitment.donFee,
            commitment.gasOverheadBeforeCallback,
            commitment.gasOverheadAfterCallback,
            commitment.timeoutTimestamp,
          ],
        );

        const resParams = defaultAbiCoder.encode(
          ['uint256', 'uint16'],
          [1, 2]
        );

        const res = defaultAbiCoder.encode(['bool', 'bytes32', 'bytes'],
          [1, encodeBytes32String('reduce'), resParams]);

        const encodedReport = defaultAbiCoder.encode(
          ['bytes32[]', 'bytes[]', 'bytes[]', 'bytes[]', 'bytes[]'],
          [[requestId], [res], [[]], [encodedCommitment], [[]]],
        );
        const result = await execute('FunctionsCoordinatorTestHelper', {from: deployer, gasLimit: 1_000_000}, 'callReport', encodedReport);
        // console.log(result.status);
        // console.log(result.events);
        // for (const log of result.events!) {
        //   const e = decodeEventLog({
        //     abi: routerResult.abi,
        //     data: log.data,
        //     topics: log.topics,
        //   });
        //   console.log(e);
        // }

      } catch (e) {
        console.log(e);
      }
    });
  });
};
export default func;
func.tags = ['MicroStorage'];
