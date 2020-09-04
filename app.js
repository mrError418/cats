const express = require('express');
const config = require('config');
const fs = require('fs');

const app = express();

const PORT = config.get('port')  || 4000;

app.use('/api/cat',require('./routes/cat.routes'));

async function start() {
 
        app.listen(PORT, () => console.log(`server was started on port ${PORT} ...`));


    
}

start();
