const http = require('http');

const server = http.createServer((req, res) => {
    res.write("here it is:");
    res.end();
})

server.listen(3334);
