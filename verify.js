/* eslint-disable no-plusplus */
const fs = require('fs');
const path = require('path');
const shelljs = require('shelljs');

const verify = async (dir) => {
  if(!fs.existsSync('./verify/pot16.ptau')){
    if(!fs.existsSync('./verify')){
      fs.mkdirSync('./verify')
    }
    console.log('Downloading perpetual powers of tau');
    shelljs.exec('curl https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_16.ptau -o ./verify/pot16.ptau');
  }
  const dirname = path.join(__dirname, `verify/${dir}`);
  let i = 1;
  fs.readdirSync(dirname).sort().forEach((file) => {
    if(path.extname(file) === '.zkey'){
      const contPath = path.join(dirname, file);
      const r1csPath = path.join('./r1cs', file.replace('zkey', 'r1cs'));
      console.log(`Verifying (${i++}/5)`);
      shelljs.exec(`node ./node_modules/.bin/snarkjs zkv ${r1csPath} ./verify/pot16.ptau ${contPath}`);
    }
  });
};

const main = async () => {
  process.exit(await verify(process.argv[2]));
};

if (require.main === module) {
  main();
}
