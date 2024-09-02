var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Simple HTML Table</title>
        </head>
        <body>
            <h1>My Simple Table</h1>
            <table border="1">
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                </tr>
                <tr>
                    <td>Row 1, Cell 1</td>
                    <td>Row 1, Cell 2</td>
                </tr>
                <tr>
                    <td>Row 2, Cell 1</td>
                    <td>Row 2, Cell 2</td>
                </tr>
            </table>
        </body>
        </html>
    `);

    res.end();
}).listen(3000);


console.log('server running at http://127.0.0.1:3000/');