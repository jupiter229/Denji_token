const hre = require("hardhat");
async function main() {
  const DenJi = await ethers.getContractFactory("DENJI");

  // Start deployment, returning a promise that resolves to a contract object
  const v2Router = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506";
  const autoLiquidityReceiver = "";
  const treasuryReceiver = "";
  const den_ji = await DenJi.deploy(v2Router, autoLiquidityReceiver, treasuryReceiver);   
  console.log("Contract deployed to address:", den_ji.address);
  console.log("\nVerifying contract...");
  try {
    await hre.run("verify:verify", {
      address: den_ji.address,
      constructorArguments: [v2Router, autoLiquidityReceiver, treasuryReceiver],
    });
  } catch (err) {
    console.log(`${err}`);
  }
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });