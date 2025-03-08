const fs = require('fs');
const path = require('path');

// Function to ensure the directory exists
const ensureDirectoryExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Function to generate the controller
const generateController = (controllerName, modelName) => {
    const controllerDirectory = path.join(__dirname, '../../../app/HTTP/Controllers');
    ensureDirectoryExists(controllerDirectory);

    const modelImport = modelName ? `const ${modelName} = require('../../Models/${modelName}');\n` : '';

    const controllerContent = `// ${controllerName}.js
${modelImport}
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

module.exports = ${controllerName};
`;

    const filePath = path.join(controllerDirectory, `${controllerName}.js`);
    fs.writeFileSync(filePath, controllerContent);
    console.log(`Controller ${controllerName} created successfully at ${filePath}`);
};

// Parse command-line arguments
const args = process.argv;
const controllerName = args[0];
let modelName = null;
console.log(args);
return;

// Check if --model=ModelName is provided
args.forEach(arg => {
    if (arg.startsWith('--model=')) {
        modelName = arg.split('=')[1];
    }
});

// Ensure controller name is provided
if (!controllerName) {
    console.error("Error: Controller name is required. Usage: node generate.js ControllerName --model=ModelName");
    process.exit(1);
}

// Generate the controller

console.log(modelName);
generateController(controllerName, modelName);
