const http = require("http");
const products = require("./data/product");
const PORT = 8080;
const server = http.createServer((req,res)=> {
     if(req.url == "/api/products") {
          res.writeHead(200,{'content-type':'text/plain'});
          res.write(JSON.stringify(products));
          res.end();
     }else {
          res.writeHead(404,{'content-type':'text/plain'});
          res.write(JSON.stringify({
               message:"Route not found"
          }));
          res.end();
     }

})

server.listen(PORT);
console.log(`run server on port ${PORT} http://localhost:${PORT}`);
