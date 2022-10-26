import express from 'express';
import bodyParser from 'body-parser';
// const connection = require ('./database/DB.js');
import Routes from './src/book/routes.js'



const app  = express()
const PORT= 8000;

app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Routes);




app.listen(PORT,()=> console.log(`server is running on Port ${PORT}`))