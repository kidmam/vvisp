const compile = require('./compile');
const compileAndDeploy = require('./compileAndDeploy');
const deploy = require('./deploy');
const forIn = require('./forIn');
const forInAsync = require('./forInAsync');
const getAllFiles = require('./getAllFiles');
const getCompiledContracts = require('./getCompiledContracts');
const getCycle = require('./getCycle');
const getTxCount = require('./getTxCount');
const getWeb3 = require('./getWeb3');
const getPrivateKey = require('./getPrivateKey');
const printOrSilent = require('./printOrSilent');
const privateKeyToAddress = require('./privateKeyToAddress');
const sendTx = require('./sendTx');
const getConfigRoot = require('./getConfigRoot');
const getRelativeFilePathsFromRoot = require('./getRelativeFilePathsFromRoot');
const getDependencyFiles = require('./getDependencyFiles');
const getSourceCodeWithoutPragma = require('./getSourceCodeWithoutPragma');
const getMaxVersion = require('./getPragmaMaxVersion');

module.exports = {
  compile,
  compileAndDeploy,
  deploy,
  forIn,
  forInAsync,
  getAllFiles,
  getCompiledContracts,
  getCycle,
  getTxCount,
  getWeb3,
  getPrivateKey,
  printOrSilent,
  privateKeyToAddress,
  sendTx,
  getConfigRoot,
  getRelativeFilePathsFromRoot,
  getDependencyFiles,
  getSourceCodeWithoutPragma,
  getMaxVersion
};
