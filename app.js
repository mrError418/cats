const express = require('express');
const fs = require('fs');

const app = express();

app.use('/static', express.static('client'));

const PORT = 8000;


async function start() {
 
        app.listen(PORT, () => console.log(`server was started on port ${PORT} ...`));


    
}

app.get('/', function(req, res) {
    fs.readFile('./client/index.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': data.length});
        res.write(data);
        res.end();
    });
});


start();
