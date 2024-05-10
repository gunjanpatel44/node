const http = require('http');
const fs = require('fs');

http.createServer(function (req,res){
    const fileStream = fs.createReadStream('./contents/big-data.txt','utf-8');
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
        res.end(err);
    })
})

.listen(5002);