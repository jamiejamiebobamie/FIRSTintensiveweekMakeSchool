const express = require('express')
const app = express()

var exphbs = require('express-handlebars');

// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));

const User = mongoose.model('User', {
  name: String,
  dogs: Object
});


// INDEX
app.get('/', (req, res) => {
  User.find()
    .then(users => {
    if (users.length == 0) {
        res.render('new-user-form');
        } else {
         res.render('users-index', { users: users });
 }
    })
});

// NEW
app.get('/users/new', (req, res) => {
  res.render('new-user-form', {});
})

// CREATE
app.post('/users', (req, res) => {
  User.create(req.body).then((user) => {
    res.redirect('/');
  }).catch((err) => {
    console.log(err.message);
  })
})

app.listen(7000, () => {
  console.log('App listening on port 7000!')
})
