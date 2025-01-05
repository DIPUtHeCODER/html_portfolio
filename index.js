const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    const url = req.url; 
    let filePath;
    if (url === '/'){
        filePath = 'index.html';
    } else if (url === '/about'){
        filePath = 'about.html';
    } else {
        filePath = '404.html';
    }
    fs.readFile(filePath, "utf8", function(err, content){
        if (err){
            console.error(err); // Log the error details to the console
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("Server error");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        }
    });
});

server.listen(3000, () => console.log("Server is running on port 3000"));
