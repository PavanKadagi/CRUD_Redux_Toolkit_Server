require('dotenv').config();
require('./database/connect')
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000","https://crud-eq4z.onrender.com"],
    optionsSuccessStatus: 200,
   credentials:true,
   methods:["GET","PUT","PATCH","POST","DELETE","OPTIONS"],
   allowedHeaders:[
    'Access-Control-Allow-Origin',
    'Content-Type',
    'Authorization',
   ],
}))
app.use(require('./routes/user'))



app.listen(port,()=>{
    console.log(`Server is runing at port ${port}`)
});