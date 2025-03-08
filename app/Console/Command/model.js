const {generateModel} = require('./all');
const modelName = process.argv[2];
if(modelName !== undefined){
  generateModel(modelName);
}
