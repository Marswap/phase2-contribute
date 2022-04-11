
# RAILGUN Trusted Setup Ceremony: How to Contribute Guide

The important part of the ceremony is that the toxic value is not leaked and it's deleted after the completion of the ceremony. Thus we recommend you to restart your machine after completing your contribution.

You can check the [Phase1 Perpetual Powers of Tau Ceremony](https://github.com/weijiekoh/perpetualpowersoftau) to verifiy Phase-1 contributions.

## 1. Requirements
A machine with 4 cores and 16Gb would do the work, but we recommend a bigger machine to process the ceremony faster.


For attestation, please ensure that you have a public identity such as a Twitter account.


## 2. Preparation of the Machine

You will need to nodejs [NodeJS v14+](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/#installing-nodejs-and-npm-from-nodesource) and [Wormhole](https://magic-wormhole.readthedocs.io/en/latest/welcome.html#installation)(**or other means of sharing files with the coordinator such as using DropBox**).

Ensure that you have `node` version 14 or higher:
```
node -v
```

1. Clone the project.
```
git clone https://github.com/Railgun-Privacy/phase2-contribute.git && cd phase2-contribute
```
2. Make directories for new and old contributions.
```
mkdir -p ceremony/old ceremony/new
```
3. Install dependencies.
```
npm i
```

## 3. Contributing to the ceremony

1. Once you receive a code from the coordinator (e.g., **7-certify-framework**), use wormhole to download the last contribution
```
wormhole receive 7-certify-framework -o ./ceremony/old --accept-file
```
Alternatively, you can receive the last contribution and extract it to `./ceremony/old`

2. Contribute to the ceremony, write your name without curly brackets and spaces.
```
npm start {yourname}
```
3. Attest to your contribution by **tweeting** the output transcript hash.

4. Send your contribution to the coordinator by sharing the output code after running this command
```
wormhole send ./ceremony/new
```
### Thank you very much for contributing! Check the [Attestations](ATTESTATION.md)