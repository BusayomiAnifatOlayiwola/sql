// 1 - environment
require('dotenv').config();

// 2 - imports
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const db = require('./models')

// 3 - App set up
const app = express();
app.set('view engine', 'ejs');

// 4 - App Middleware (app.use)
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// 5 - Routes (controllers)
app.get('/', (req, res) => {
    res.send('Welcome to my App'); // Yo, Rome: what is this doing?
});


app.get('/coders', (req, res)=>{
    db.user.findAll()
    .then((users)=>{
         res.render('index.ejs', {users: users})
    })
})


//new route
app.get('/coders/new', (req, res)=>{
   //form will come here
   console.log('This the new route')
    res.render('new')
})
//this goes in new route from form
app.post('/coders', (req, res)=>{
    const userInput = req.body
    let updateAge = Number(userInput.age)
    let firstName = userInput.firstName
    let lastName = userInput.lastName
    let email = userInput.email
    console.log(firstName)
        //to insert to database
        db.user.create({
            firstName,
            lastName,
            email,
            age: updateAge
        })
        .then(newCoder =>{
            console.log(newCoder.get())
            res.redirect('/coders')
         })
        })
//     db.user.create({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         age: req.body.age
//    })



const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`)
})
