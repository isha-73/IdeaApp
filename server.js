const express= require('express');
const serverConfig = require('./configs/server.config.js');
const app = express(); // central character

app.listen(serverConfig.PORT, () => { // callback function
    console.log('Server is running on port 3000');
});