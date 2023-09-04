const express = require('express')
const router = express.Router();
var resumes = {}
router.get('/',(req,res)=>
{
    res.json(resumes)
})
router.post('/',(req,res)=>
{
    resumes = req.body
    console.log(req.body)
})
module.exports = router;