const hre = require("hardhat");
async function main() {
  // const ANNOY = await ethers.getContractFactory("ANNOY");
  const MAC = await hre.ethers.getContractFactory("MAC");

  // Start deployment, returning a promise that resolves to a contract object
  const v2Router = "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506";
  const v1Router = "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f";
  // const v2Router = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  
  const autoLiquidityReceiver = "0xe685355e3005260D2117189795d79b3FD60896Fe";
  const treasuryReceiver = "0x2e6F11125991815BCd073bbbfd74aa9F2b820Fb4";
  const firepitReceiver = "0x976e8ec117ae650139E6eb5c9BA2cC77368D9B52"
  const mac = await MAC.deploy(v2Router, autoLiquidityReceiver, treasuryReceiver);   

  await mac.deployed();

  console.log("Contracts deployed successfully: ", mac.address);

  setTimeout(async () => {
    console.log("\nVerifying contract...");
    try {
      await hre.ethers.run("verify:verify", {
        address: mac.address,
        constructorArguments: [v2Router, autoLiquidityReceiver, treasuryReceiver],
      });
    } catch (err) {
      console.log(`${err}`);
    }
  }, "10000");

  
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });