
# RAILGUN Trusted Setup Ceremony: How to Contribute Guide

The important part of the ceremony is that the toxic value is not leaked and it's deleted after the completion of the ceremony. Thus we recommend you to restart your machine after completing your contribution.

You can check the [Phase1 Perpetual Powers of Tau Ceremony](https://github.com/weijiekoh/perpetualpowersoftau) to verifiy Phase-1 contributions.

## 1. Preparation of the Machine

- Install nodejs [NodeJS v14+](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/#installing-nodejs-and-npm-from-nodesource) and [Wormhole](https://magic-wormhole.readthedocs.io/en/latest/welcome.html#installation)

- Ensure that you have `node` version 14 or higher: `node -v`
- Ensure that `wormhole` is in the PATH envrionment variable `wormhole --version`
- Clone the project: `git clone https://github.com/Railgun-Privacy/phase2-contribute.git && cd phase2-contribute`
- Install dependencies `npm i`

## 2. Contributing to the ceremony

1. Contribute once you receive a code from the coordinator:
```
npm start {yourName} {code}
```
Example: 
```
npm start alice 5-orlando-clockwork

> phase2-contribute@0.0.1 start
> node ./index.js "alice" "5-orlando-clockwork"

Overwriting './ceremony/old'
Receiving directory (36.3 MB) into: old/
6 files, 55.3 MB (uncompressed)
Receiving (->relay:tcp:magic-wormhole-transit.debian.net:4001)..
100%|██████████| 36.3M/36.3M [00:14<00:00, 2.58MB/s]
Unpacking zipfile..
Received files written to old/
Contributing to joinsplit_1x2.zkey
Contributing to joinsplit_1x3.zkey
Contributing to joinsplit_2x2.zkey
Contributing to joinsplit_2x3.zkey
Contributing to joinsplit_8x2.zkey
Please share the code the following code with the coordinator
Building zipfile..
Sending directory (36.3 MB compressed) named 'new'
Wormhole code is: 2-recipe-quota
On the other computer, please run:

wormhole receive 2-recipe-quota

Sending (<-155.138.133.10:55536)..
  0%|          | 0.00/36.3M [00:00<?, ?B/ 66%|██████▌   | 23.8M/36.3M [00:00<00:00100%|██████████| 36.3M/36.3M [00:00<00:00, 239MB/s]
File sent.. waiting for confirmation
Confirmation received. Transfer complete.
Please, tweet this value:1d783b0b54a768ce0d342036f8a95f9c6600c38ff906ff3177048117a5da6636
```
2. Share the output code with the coordinator, in the above example it is **2-recipe-quota**
3. Once the coordinator receives your contribution, you can attest to your contribution by **tweeting** the output transcript hash.

### Thank you very much for contributing! Check the [Attestations](ATTESTATION.md)