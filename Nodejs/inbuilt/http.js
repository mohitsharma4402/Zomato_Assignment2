let http = require('http');
let server = http.createServer((req,res) => {
    res.write('<h1> I am mohit sharma  </h1>');
    res.end();

})

server.listen(7800)