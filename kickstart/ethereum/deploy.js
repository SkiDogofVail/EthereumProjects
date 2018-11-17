const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'gasp evil panther uncover shy reduce flush length chair fruit alter glory',
  'https://rinkeby.infura.io/v3/b05f34901a55477f80ad17e0d5008766'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();

// Contract deployed to 0x29863D3BEA78d92c25AC0541875E090a20B5DA05
// gasp evil panther uncover shy reduce flush length chair fruit alter glory
// https://rinkeby.infura.io/v3/b05f34901a55477f80ad17e0d5008766
// https://rinkeby.infura.io/v3/b05f34901a55477f80ad17e0d5008766
// gasp evil panther uncover shy reduce flush length chair fruit alter glory
