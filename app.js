const express = require('express')
const methodOverride = require('method-override')
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
app.use(methodOverride('_method'))

const User = mongoose.model('User', {
  name: String,
  dog: Object,
  street_address: String,
  zip: String
});

const Dog = mongoose.model('Dog', {
  name: String,
  breed: String,
  sex: String,
  color: String,
  notes: String
});


//// INDEX
//app.get('/', (req, res) => {
//  User.find()
//    .then(users => {
//    if (users.length == 0) {
//        res.render('new-user-form');
//        } else {
//         res.render('users-index', { users: users });
// }
//    })
//});
//
//// NEW
//app.get('/users/new', (req, res) => {
//  res.render('new-user-form', {});
//})
//
//// CREATE
//app.post('/users', (req, res) => {
//  User.create(req.body).then((user) => {
//    res.redirect(`/users/${user._id}/edit`)
//  }).catch((err) => {
//    console.log(err.message);
//  })
//})
//
//// SHOW
//app.get('/users/:id', (req, res) => {
//  User.findById(req.params.id).then((user) => {
//    res.render('users-show', { user: user })
//  }).catch((err) => {
//    console.log(err.message);
//  })
//})
//
//// EDIT
//app.get('/users/:id/edit', (req, res) => {
//  User.findById(req.params.id, function(err, user) {
//    res.render('users-edit', {user: user});
//  })
//})
//
////Update
//app.put('/users/:id', (req, res) => {
//  User.findByIdAndUpdate(req.params.id, req.body)
//    .then(user => {
//      res.redirect(`/users/${user._id}`)
//    })
//    .catch(err => {
//      console.log(err.message)
//    })
//})
//
//// NEW
//app.get('/users/dogs/new', (req, res) => {
//  res.render('new-dog-form', {});
//})
//
//// CREATE
//app.post('/users', (req, res) => {
//  User.create(req.body).then((user) => {
//    res.redirect(`/users/${user._id}/edit`)
//  }).catch((err) => {
//    console.log(err.message);
//  })
//})


//Wireframe-Planning

// Loading
app.get('/', (req, res) => {
  res.render('loading', {});
});

app.listen(7000, () => {
  console.log('App listening on port 7000!')
});
