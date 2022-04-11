/* eslint-disable no-plusplus */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const shelljs = require('shelljs');

const dirname = path.join(__dirname, './ceremony/old');
const newDirname = path.join(__dirname, './ceremony/new');

const contribute = async (contributor) => {
  let transcript = `Contribution by: ${contributor}\n`;
  let i = 1;
  fs.readdirSync(dirname).forEach((file) => {
    if(path.extname(file) === '.zkey'){
      const oldCont = path.join(dirname, file);
      const newCont = path.join(newDirname, file);
      const currentEntropy = crypto.randomBytes(256).toString('hex');
      console.log(`Contributing (${i++}/5)`);
      const cmd = `node ./node_modules/.bin/snarkjs zkc ${oldCont} ${newCont} -e="${currentEntropy}" -n="${contributor}"`;
      const out = shelljs.exec(`${cmd}`, { silent: true });
      transcript += `Contributing to ${path.basename(newCont)}\n`;
      transcript += `${out}\n\n`;
    }
  });

  const transcriptFilepath = path.join(newDirname, 'transcript');
  fs.writeFileSync(transcriptFilepath, `${transcript.trim()}\n`);
  console.log('If you have keybase installed, then run:')
  console.log('\x1b[32m%s\x1b[0m',`keybase sign -i ${transcriptFilepath} -b -o ${transcriptFilepath}.signed`);
  const hash = crypto.createHash('sha256');
  const buffer = fs.readFileSync(transcriptFilepath);
  hash.update(buffer);
  const hex = hash.digest('hex');
  console.log('Otherwise, tweet this value:\x1b[32m%s\x1b[0m', hex);
  console.log('Thank you for the contribution');
};

const main = async () => {
  process.exit(await contribute(process.argv[2], process.argv[3]));
};

if (require.main === module) {
  main();
}
