const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/file',(req,res)=>{
    console.log('req')
    res.download('./download.jpeg')
})

app.listen(7000,()=>{
    console.log('Server running on port 7000')
})