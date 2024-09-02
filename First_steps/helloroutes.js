const http = require('http');

// Create a server object
http.createServer((req, res) => {
    // Set the response header to indicate HTML content
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Check the URL and respond accordingly
    if (req.url === '/') {
        res.write('<h1>Welcome to the Home Page</h1>');
    } else if (req.url === '/helloworld') {
        res.write('<h1>Hello World in HTML</h1>');
    } else if (req.url === '/homepage') {
        res.write('<h1>HOMEPAGE</h1>');
    } else if (req.url === '/contact') {
        res.write('<h1>Contact Us</h1><p>You can contact us at contact@example.com.</p>');
    } else if (req.url === '/about') {
        res.write('<h1>About Us</h1><p>We are a fictional company creating sample Node.js applications.</p>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
    }

    // End the response
    res.end();
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
