require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food plunge rival muscle pumpkin gloom argue sure genuine'; 
let testAccounts = [
"0x04c90f25170665d77261e41efab21743631e8fdd4c15b767d76c79566b2c1b33",
"0xe95cf40c8aa69357e79bbc946e7bfa76f6087879d0e33d1cd6e5d4cecabd375a",
"0x73737d103f2215e22c07d086d9c688db26b58983c1b4169324946ce861c27e15",
"0xa7051092b6dc162c0030ef61844db27ac21b6906ccb25aec9c2d3a24a909e940",
"0xb0be002df3398b0f6ceb34fd0b3b79e3ec3a8b6b08f7b65c705984c287b9bd46",
"0xb99ec70fefd62c8fdb95c31b1dfd9aa3eabd39cc47c7bcdab50be2bdd16dd421",
"0x2a198faffac71df5c2485cbf289c24ae16a1848659e990b2d5cbe958ac5015ce",
"0xe3027250109826e4d67c2efd2dce5e5f8db0031ce18ef282ccc2aee867530c8c",
"0x5dd2d2e0568fcadb45f354d11536309838f9545e8fe48890242dc34b299e8e81",
"0x446273fb1b77c0b837da287f4c17bcd01b7a5fe8691cfd35ca1e8054ac6523d7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
