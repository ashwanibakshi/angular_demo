const express   = require("express");
const mongoose  = require("mongoose");
const cors      = require("cors");


const app = express();

mongoose.connect("mongodb://localhost:27017/compdemo")
.then(()=>console.log('connected to db'))
.catch((err)=>console.log("db connection error",err))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());

app.use('/api/v1',require("./routes/api_routes"));

const port = process.env.PORT || 3000;

app.listen(port,()=>console.log("server run at port "+port));