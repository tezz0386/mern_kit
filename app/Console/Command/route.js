const {generateRouter} = require('./all');
const routerName = process.argv[2];
if(routerName !== undefined){
    generateRouter(routerName);
}
