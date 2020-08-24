const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = ""; //enter your own (dont upload this)


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*" // match any network id
    },
    rinkeby: {
    
      provider: function () {
       
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/(YOUR KEY HERE)")
      },
      network_id: 4
  }
}; 
