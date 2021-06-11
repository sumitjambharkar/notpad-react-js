const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Port = 3001
const Note = require('./models/Notes');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/notesDB',{useNewUrlParser: true,useUnifiedTopology: true })

app.post('/create', function (req, res) {
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title,
        content
    });
    newNote.save()
})

app.get('/notes',(req,res)=>{
    Note.find().then(resData=>res.json(resData))

})

app.listen(3001,()=>{
    console.log(`sever running port ${Port}`);

})