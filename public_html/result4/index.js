import { Server } from 'http';

Server((req, res) => {
    const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers'
    };

    let requestBody = '';

    req.on('data', chunk => {
        requestBody += chunk;
    });

    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8', ...CORS });

        const jsonRes = {"message": "day108", "x-result": req['headers']['x-test'], "x-body": requestBody};
        const str = JSON.stringify(jsonRes);

        console.log(str);

        res.end( str );
    });
})
    .listen(4321);