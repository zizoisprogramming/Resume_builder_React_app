const express = require('express')
const cov = express.Router();
var covs = {}
cov.get('/',(req,res)=>
{
    res.json(covs)
})
cov.post('/',(req,res)=>
{
    covs = req.body
    console.log(req.body)
})
module.exports = cov;