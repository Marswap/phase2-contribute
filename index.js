/* eslint-disable no-plusplus */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const shelljs = require('shelljs');



const contribute = async (contributorName, wormholeCode) => {
  // create directories
  shelljs.exec('rm -rf ./ceremony');
  shelljs.mkdir('-p', ['./ceremony/old', './ceremony/new']);
  // download previous contribution
  shelljs.exec(`wormhole receive ${wormholeCode} -o ./ceremony/old --accept-file`);

  const oldContributionDir = path.join(__dirname, './ceremony/old');
  const newContributionDir = path.join(__dirname, './ceremony/new');

  // contribute
  let transcript = `Contribution by: ${contributorName}\n`;
  let i = 1;
  fs.readdirSync(oldContributionDir).forEach((file) => {
    if(path.extname(file) === '.zkey'){
      const oldCont = path.join(oldContributionDir, file);
      const newCont = path.join(newContributionDir, file);
      const currentEntropy = crypto.randomBytes(256).toString('hex');
      console.log(`Contributing to ${path.basename(newCont)}`);
      const cmd = `node ./node_modules/.bin/snarkjs zkc ${oldCont} ${newCont} -e="${currentEntropy}" -n="${contributorName}"`;
      const out = shelljs.exec(`${cmd}`, { silent: true, fatal: true });
      transcript += `Contributing to ${path.basename(newCont)}\n`;
      transcript += `${out}\n\n`;
    }
  });

  // write transcript
  const transcriptFilepath = path.join(newContributionDir, 'transcript');
  fs.writeFileSync(transcriptFilepath, `${transcript.trim()}`);

  // send contribution
  console.log('Please share the code the following code with the coordinator');
  const out = shelljs.exec('wormhole send ./ceremony/new');

  // compute transcript hash
  const hash = crypto.createHash('sha256');
  const buffer = fs.readFileSync(transcriptFilepath);
  hash.update(buffer);
  const hex = hash.digest('hex');
  console.log('Please, tweet this value:\x1b[32m%s\x1b[0m', hex);
  console.log('Thank you for the contribution');
};

const main = async () => {
  process.exit(await contribute(process.argv[2], process.argv[3]));
};

if (require.main === module) {
  main();
}