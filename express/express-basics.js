const express = require('express');
const app = express();

// Methds in express
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.listen
// app.use

app.get('/',(req,res)=>{
    console.log("User hit the resource");
    res.send("Home Page");
})

app.get('/about',(req,res)=>{
    console.log("User hit the resource");
    res.send("About Page");
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>404 Resource not found</h1>')
})

app.listen(5002,()=>{
    console.log("Server is listening on 5002");
})