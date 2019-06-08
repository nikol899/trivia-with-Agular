const express = require("express");
const scores =express.Router();
const pool =require("./connection");

function selectScore(res){
    pool.query("select * from scores").then(result=>res.json(result.rows));
}
scores.get("/scores",(req,res)=>{
    selectScore(res);
});
scores.post("/scores",(req,res)=>{
    pool.query("insert into scores (username,scores)values($1::text,$2::int)",
    [req.body.username,
    req.body.scores]).then(()=>{
        selectScore(res);
    });
});

module.exports=scores;