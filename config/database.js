const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.set('strictQuery', true);
    let DB_URL = process.env.DB_URL+':'+process.env.DB_PORT+'/'+process.env.DB_NAME
    mongoose.connect(process.env.DB_URL).then(conn=>{
        console.log(`Mangodb connected with  ${conn.connection.host}`);
    });
}

module.exports = connectDatabase;