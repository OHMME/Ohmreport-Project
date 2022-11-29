const express = require('express')
const { spawn } = require('child_process');
const { REFUSED } = require('dns');
const app = express();
var router = express.Router();

var idx = ""


app.get('/report', (req, res) => {
    const id = req.query.id
    // const word = req.query.word
    const process = spawn('python3', [`./goreport.py --id ${id} --format word`], { shell: true })
    
    process.stdout.on('data', function (data) {

        if(data.toString()) {
            res.send('generate report successfuly.')
            var Result_output = ""
            Result_output += data.toString()
            idx = Result_output.split('"')[1]
            console.log(Result_output)

        } else {
            res.send('generate report error.')
        }
        
    })
    
    process.on('error', (error) => console.log(error))
})




app.get('/download-file', function (req, res) {
    res.download("./"+ idx);    
});

app.listen(8080, () => {
    console.log('server running on port 8080')
})