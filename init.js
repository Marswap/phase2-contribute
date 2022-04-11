/* eslint-disable no-plusplus */
const fs = require('fs');
const path = require('path');
const shelljs = require('shelljs');

const init = async () => {
  if(!fs.existsSync('./verify/00-initial')){
    shelljs.exec('mkdir -p verify/00-initial')
  }
  if(!fs.existsSync('./verify/pot16.ptau')){
    console.log('Downloading perpetual powers of tau');
    shelljs.exec('curl https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_16.ptau -o ./verify/pot16.ptau');
  }
  const r1csPath = path.join(__dirname, './r1cs');
  const zkeyPath = path.join(__dirname, '/verify/00-initial');
  let i = 1;
  fs.readdirSync(r1csPath).sort().forEach((file) => {
      const r1cs = path.join(r1csPath, file);
      const zkey = path.join(zkeyPath, file.replace('r1cs', 'zkey'));
      console.log(`Initializing (${i++}/5)`);
      shelljs.exec(`node ./node_modules/.bin/snarkjs g16s ${r1cs} ./verify/pot16.ptau ${zkey}`);
  });
};

const main = async () => {
  process.exit(await init());
};

if (require.main === module) {
  main();
}
