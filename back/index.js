const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.listen(8001)
const resumes = require('./routes/resumes')
const covers = require('./routes/cover')
app.use('/api/resumes',resumes)
app.use('/api/covers',covers)
app.get('/api',(req,res)=>
{
    res.send("ok")
})
