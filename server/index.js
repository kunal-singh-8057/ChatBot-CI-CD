require("dotenv").config();
const express = require("express");
const app = require("../server/App/app");
const PORT = process.env.PORT;
const connectDB = require("../server/Utils/db");
const bodyParser = require("body-parser");
const userRouter = require("../server/Routes/userRouter");
const cookieparsers = require("cookie-parser");
const cors = require("cors");


connectDB();

app.use(express.json());
app.use(cookieparsers());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin:["http://localhost:8080"],
    credentials:true
}));
app.use("/api/v1/",userRouter);


app.listen(`${PORT}`,()=>{
    console.log(`The server is running at http://localhost:${PORT}`)
})