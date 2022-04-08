const http = require('http');
const port = process.env.PORT || 5000;
const handler = async (req, res) => {
    let buffer = [];
    for await (const chunk of req) {
        buffer.push(chunk);
    }
    const data = JSON.parse(Buffer.concat(buffer).toString());
    console.debug(data);
    res.writeHead(200);
    res.end();
};
const server = http.createServer(handler);

server.listen(port);