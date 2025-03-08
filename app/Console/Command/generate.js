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
  modelsDirectory = path.join(__dirname+'/../../../app', 'Models');
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
    const controllerDirectory = path.join(__dirname+'/../../../app/Http/', 'Controllers');
    ensureDirectoryExists(controllerDirectory);
    const controllerContent = `// ${controllerName}.js
const ${modelName} = require('../../Models/${modelName}');
const ${controllerName} = {
  index: async (req, res) => {
        try {
            const data = await ${modelName}.find();
            res.status(200).json({
                success: true,
                data: data,
                message: "Fetched successfully",
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                data: [],
                message: error.message,
            });
        }
    },

    show: async (req, res) => {
        try {
            const data = await ${modelName}.findById(req.params.id);
            if (!data) {
                return res.status(404).json({
                    success: false,
                    data: [],
                    message: "Record not found",
                });
            }
            res.status(200).json({
                success: true,
                data: data,
                message: "Fetched successfully",
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                data: [],
                message: error.message,
            });
        }
    },

    store: async (req, res) => {
        try {
            const newData = new ${modelName}(req.body);
            await newData.save();
            res.status(201).json({
                success: true,
                data: newData,
                message: "Created successfully",
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                data: [],
                message: error.message,
            });
        }
    },

    update: async (req, res) => {
        try {
            const updatedData = await ${modelName}.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!updatedData) {
                return res.status(404).json({
                    success: false,
                    data: [],
                    message: "Record not found",
                });
            }
            res.status(200).json({
                success: true,
                data: updatedData,
                message: "Updated successfully",
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                data: [],
                message: error.message,
            });
        }
    },

    destroy: async (req, res) => {
        try {
            const deletedData = await ${modelName}.findByIdAndDelete(req.params.id);
            if (!deletedData) {
                return res.status(404).json({
                    success: false,
                    data: [],
                    message: "Record not found",
                });
            }
            res.status(200).json({
                success: true,
                data: deletedData,
                message: "Deleted successfully",
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                data: [],
                message: error.message,
            });
        }
    }
};

module.exports = ${controllerName};`;


  fs.writeFileSync(path.join(controllerDirectory, `${controllerName}.js`), controllerContent);
  console.log(`Controller ${controllerName} created successfully.`);
}

function generateRouter(routerName) {
    const routerDirectory = path.join(__dirname, '/../../../routes');
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
