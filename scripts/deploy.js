async function main() {
  const DenJi = await ethers.getContractFactory("DENJI");

  // Start deployment, returning a promise that resolves to a contract object
  const den_ji = await DenJi.deploy("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", "0xe685355e3005260D2117189795d79b3FD60896Fe", "0x2e6F11125991815BCd073bbbfd74aa9F2b820Fb4");   
  console.log("Contract deployed to address:", den_ji.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });