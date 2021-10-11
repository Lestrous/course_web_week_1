import { Server } from 'http';

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers'
};

Server((req, res) => {
    let requestBody = '';

    req.on('data', chunk => {
        requestBody += chunk;
    });

    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', ...CORS });

        const str = JSON.stringify({"message": "day108", "x-result": req['headers']['x-test'], "x-body": requestBody});

        res.end( str );
    });
})
    .listen(4321);