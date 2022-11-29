const express = require('express')
const { spawn } = require('child_process')
const app = express();



app.get('/report', (req, res) => {
    const id = req.query.id
    // const word = req.query.word
    const process = spawn('python3', [`./goreport.py --id ${id} --format word`], { shell: true })
    
    process.stdout.on('data', function (data) {
        if(data.toString()) {
            res.send('generate report successfuly.')
        } else {
            res.send('generate report error.')
        }
        
    })
    
    process.on('error', (error) => console.log(error))
})


app.listen(8080, () => {
    console.log('server running on port 8080')
})