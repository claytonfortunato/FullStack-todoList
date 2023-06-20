const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.post("/user", async (req,res) => {
    const {email,password} = req.body;

    const new
});

app.post('/login', async (req,res) => {
    const {email, password} = req.body;
})