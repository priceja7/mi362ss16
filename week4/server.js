/**
 * Created by price on 2/4/2016.
 */
const http = require('http');

http.createServer( (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hello World</h1>')
    response.write('<p>This is a node app!</p>')
    response.end();
}).listen(8124);

http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
}).listen(8000);

console.log('Server running at http://127.0.0.1:8124/');

