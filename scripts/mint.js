const hre = require("hardhat");
async function main() {
  const myNFT = await ethers.getContractFactory("ARBOSHIS");

  // Start deployment, returning a promise that resolves to a contract object
  // const v2Router = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506";
  const baseURL = "https://shiboshis.mypinata.cloud/ipfs/QmUEiYGcZJWZWp9LNCTL5PGhGcjGvokKfcaCoj23dbp79J/";
  const arboshis = await myNFT.deploy(baseURL);   

  await arboshis.deployed();

  console.log(`\nTransaction id: ${arboshis.deployTransaction.hash}`);
  console.log("Waiting for confirmation transaction...");
  const arboshisTxReceipt = await arboshis.deployTransaction.wait();
  console.log(
    `Arboshis Contract Creation Transaction confirmed in block: ${arboshisTxReceipt.blockNumber}`,
  );
  
  console.log("\nVerifying contract...");
  try {
    await hre.run("verify:verify", {
      address: arboshis.address,
      constructorArguments: [baseURL],
    });
  } catch (err) {
    console.log(`${err}`);
  }

  console.log("Contract deployed to address:", arboshis.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });