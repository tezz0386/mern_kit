const app = require('./app');
const server = app.listen(process.env.PORT, ()=>{
    console.log(`App Is running at ${process.env.PORT} in ${process.env.NODE_ENV} mode click to ${process.env.APP_URL}.`);
});

process.on('unhandledRejection', (error) => {
    console.log(`ERROR: ${error.message}`);
    console.log("Shutting down server...");
    server.close(() => process.exit(1));
});

module.exports = server;

