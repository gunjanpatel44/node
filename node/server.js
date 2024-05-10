const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Home Page ");
    }
    if(req.url === "/about"){
        res.end("about Page");
        for (let i = 0; i < 44; i++) {
            for (let j = 0; j < array.length; j++) {
                console.log(`${i} ${j}`);   
            }
        }
    }
    res.end("Error page ");
})

server.listen(5002,()=>{
    console.log("Server is listening on 5002.");
})