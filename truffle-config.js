require("babel-register");
require("babel-polyfill");

module.exports = {
  networks: {
    development: {
      host: "192.168.1.67",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/truffle_abis",
  compilers: {
    solc: {
      version: "^0.8.6",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
