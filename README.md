
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

1. Contribute once you receive a code from the coordinator (e.g., code is **7-certify-framework** and your name is Alice):
```
npm start Alice 7-certify-framework
```
2. Share the output code with the coordinator 
3. Attest to your contribution by **tweeting** the output transcript hash.

### Thank you very much for contributing! Check the [Attestations](ATTESTATION.md)