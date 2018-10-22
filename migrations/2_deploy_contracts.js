var PIPOT = artifacts.require('./PIPOT.sol')

module.exports = function (deployer) {
  deployer.deploy(PIPOT,"0xb7cc6c9fcb6e272e2959101571e3ed005ddc68c6",{gas: 2000000})
}
