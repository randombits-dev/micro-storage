const {ethers, network} = require("hardhat");

const run = async () => {
  const coordinator = await ethers.getContract('FunctionsCoordinatorTestHelper');
  coordinator.on('OracleRequest', (requestId,
                                   requestingContract,
                                   requestInitiator,
                                   subscriptionId,
                                   subscriptionOwner,
                                   data,
                                   dataVersion,
                                   flags,
                                   callbackGasLimit,
                                   commitment,) => {
    console.log('OracleRequest', requestId, requestingContract);
  });

};

run()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
