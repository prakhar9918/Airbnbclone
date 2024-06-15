const express = require('express');
const dotenv =  require('dotenv');
const path = require('path');
const userApis = require("./route/user_route");
const ejsMate = require('ejs-mate');
const bodyParser = require('body-parser');

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    res.send("hello");
})

app.use(userApis);

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})


