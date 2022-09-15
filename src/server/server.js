const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Character = require('./models/characterModels')

const app = express();

const apiRouter = require('./routes/api')
const PORT = 3000;

app.use(bodyParser.json()); //parses any json requests
app.use(bodyParser.urlencoded({ extended: true})); //parses any requests with url encoded parameters in body

mongoose.connect("mongodb+srv://mcmcgowan:campaignpass@cluster0.pfvht1l.mongodb.net/?retryWrites=true&w=majority")
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to campaignDB'))
app.use(express.json())

//handle requests for static files, don't have any currently
//app.use(express.static(__dirname + '/public'))
//define route handlers
//serves the menu page
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '../client/index.html'))
})

app.use('/api', apiRouter);

//404, if server receives a path that is not designed here, 404
app.use((req, res) => {
    console.log(`error at server/app.js: no handler for ${req.method} request at url: ${req.url}`);
    res.status(404).send('Page not found')
})

//global error handling
app.use((err, req, res, next) => {
    const defaultError = {
        message: { err: 'An error occured'},
        log: 'Express error handler caught unknown middleware error',
        status: 500
    }
    const errObj = Object.assign({}, defaultError, err);
    console.log('Error Oject Log', errObj.log);
    return res.status(errObj.status).json(errObj.message);
});

//start server
app.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`);
});

module.exports = app;