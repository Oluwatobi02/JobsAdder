const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {addJob } = require('./Jobs');


const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/jobs',async (req, res) => {
    await addJob(req.body)
    
})





app.listen(port, () => {
    console.log("running.....")
})