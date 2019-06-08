"use strict";

const express = require("express");
const questions =express.Router();
const pool =require("./connection");

function selectedQuestions(res){
    pool.query("select * from questions order by random() limit 10").then(result=>res.json(result.rows));
}
questions.get("/questions",(req,res)=>{
   selectedQuestions(res);
});

module.exports = questions;

