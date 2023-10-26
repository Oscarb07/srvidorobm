//import express from "express"
const express = require("express")
import router from "./src/network/user";
const app = express();

const example = function(){ 
    console.log("Estoy a la escucha")}

app.listen(
    9000,
    example
)