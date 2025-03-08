// generate.js
const fs = require('fs');
const path = require('path');

function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

let modelsDirectory = ''
let newModelName = '';
function generateModel(modelName) {
  modelsDirectory = path.join(__dirname+'/app/', 'Models');
  ensureDirectoryExists(modelsDirectory);

newModelName = `${getName(modelName)}Schema`;

const modelContent = `
const mongoose = require('mongoose');
const ${newModelName} = new mongoose.Schema({
    // please write your attribute here
    createdAt:{
      type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('${modelName}', ${newModelName});`;
  fs.writeFileSync(path.join(modelsDirectory, `${modelName}.js`), modelContent);
  console.log(`Model ${modelName} created successfully.`);
}




function generateController(controllerName) {
    const controllerDirectory = path.join(__dirname+'/app/HTTP/', 'Controllers');
    ensureDirectoryExists(controllerDirectory);
    const controllerContent = `// ${controllerName}.js
const ${modelName} = require('../../Models/${modelName}');
const ${controllerName} = {
  // Your controller logic here
};

module.exports = ${controllerName};`;
    fs.writeFileSync(path.join(controllerDirectory, `${controllerName}.js`), controllerContent);
    console.log(`Controller ${controllerName} created successfully.`);
}

function generateRouter(routerName) {
    const routerDirectory = path.join(__dirname, 'routes');
    ensureDirectoryExists(routerDirectory);
    const routerContent = `// ${routerName}.js
const express = require('express');
const router = express.Router();

// Define your routes here

module.exports = router;`;
    fs.writeFileSync(path.join(routerDirectory, `${routerName}.js`), routerContent);
    console.log(`Router ${routerName} created successfully.`);
}


function getName(str){
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}

const modelName = process.argv[2];
const controllerName = process.argv[3];
const routerName = process.argv[4];


if(modelName !== undefined){
  generateModel(modelName);
}
if(controllerName !== undefined){
  generateController(controllerName);
}


if(routerName !== undefined){
  generateRouter(routerName);
}
