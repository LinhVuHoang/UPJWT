const express = require('express') // import express
const bodyParser = require('body-parser') //import body-parser
//create express app
const app =express();
//parse requests of content-type - application/x-www-form-urlencoded
//phan tich cu phap yeu cau thuoc loai noi dung -- ung dung
app.use(bodyParser.urlencoded({extended:true}))
// parse requests of content-type - application/json
app.use(bodyParser.json())
//xac dinh 1 router don gian
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
require('./app/routes/note.routes.js')(app);
//lang nghe cac yeu cau (listen for requests)
app.listen(3000, () => { // day la mot function arrow
    console.log("Server is listening on port 3000");
});
app.use(bodyParser.json())
// Configuring the database
const dbConfig = require('./app/config/database.config'); //this ís the route to config.js
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});