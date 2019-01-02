const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let port = process.env.PORT || 3000;
const server =http.createServer(app);
let folder = __dirname+'/dist/html/';
//start app request
app.get('/', (req, res)=>{
if(req.url === '/'){
res.sendFile(folder+"/"+req.pathname);
}else{
	console.log('request = '+req.url);
};//endif;
});//endGet;

server.listen(port, ()=>{console.log("Server ready Port: "+port);});