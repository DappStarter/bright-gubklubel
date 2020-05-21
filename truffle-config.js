require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift recipe stereo estate hockey prison off sudden'; 
let testAccounts = [
"0x7677f17e5548824e63d3748e2cf8c69ce040b329156a63c05787e4bd9e36f4cc",
"0xaf300ec96e0e9c63b4f9038f5d4b248814df48cf8f6bc4096da501f0ea990ebb",
"0x8f65dd72c1bab41b6d9368bc9496024452a07886801103534fe90a314d8f33c4",
"0x4f64c8a40abc787c5db436b74cb65376e7cfdca84f5372be92244aa66b024025",
"0xe3d587bb53af08cf4a9b627ac89e15b7f204745d937febe215f3c71433d60643",
"0x6da83fcf1fa2ab478f69db108b9678cf6334d657ecde4a1077c7010ecb996e64",
"0xa4d845f91f070851aeb792084a8c786030562ab150871b1311a4e30e1b263d16",
"0x2b4e3579d662398d749491f64be3314e64e79146e672ebbd4dda4ad0a5291a4a",
"0xe2bfe1b153586cd1ad480d564e70079fe4a3a34098dc8fd3d228f33cdb939348",
"0xb9858547977342d7571227efd50bcf51a6e15bea91d403b2082d4ccb632c42dd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
