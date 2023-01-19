
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/G83k83FWItstTHtqtY2Hb6xA-VgrAb2u',
      accounts: ['8672da6235b95f12bbb12e9275d59af3e59c1d8d5ac97d85c61de70952e8408e'],
    },
  },
};