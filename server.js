"use strict";
const express =require("express");
const app=express();
const scoresRoute = require("./scores.api");
const questionRoute=require("./question.api");
// const route = require("./question.api","./scores.api");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
// app.use("/",route);
app.use("/",questionRoute);
app.use("/",scoresRoute);

const port =3000;
app.listen(port,()=> console.log(`Server is running on port ${port}`));