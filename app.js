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

var User = mongoose.model('User', {
  name: String,
  dog: Object,
  street_address: String,
  zip: String,
  distance: String,
  new_user: Boolean
});


const Dog = mongoose.model('Dog', {
  name: String,
  breed: String,
  sex: String,
  color: String,
  notes: String
});



//in html use:  site:www.akc.org poodle <a href="http://www.google.com/site:www.akc.org {{search_term}} ">New User</a>


// exmaple of selecting users based on an attribute
//app.get('/users', (req, res) => {
//  User.find({ 'New_user': false})
//    .then(users => {
//    if (users.length == 0) {
//        res.render('new-user-form');
//        } else {
//         res.render('users-index', { users: users });
// }
//    })
//});



app.get('/users', (req, res) => {
  User.find()
    .then(users => {
    if (users.length == 0) {
        res.render('new-user-form');
        } else {
         res.render('users-index', { users: users });
 }
    })
});

// get the NEW user form
app.get('/users/new', (req, res) => {
  res.render('new-user-form', {});
})

// CREATE a new user
app.post('/users', (req, res) => {
  User.create(req.body).then((user) => {
    res.redirect(`/users/${user._id}/edit`)
  }).catch((err) => {
    console.log(err.message);
  })
})

// view a user profile
app.get('/users/:id', (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.render('users-show', { user: user })
  }).catch((err) => {
    console.log(err.message);
  })
})


// SHOW
//app.get('/reviews/:id', (req, res) => {
//  // find review
//  Review.findById(req.params.id).then(review => {
//    // fetch its comments
//    Comment.find({ reviewId: req.params.id }).then(comments => {
//      // respond with the template with both values
//      res.render('reviews-show', { review: review, comments: comments })
//    })
//  }).catch((err) => {
//    // catch errors
//    console.log(err.message)
//  });
//});

// address info form (EDIT)
app.get('/users/:id/edit', (req, res) => {
  User.findById(req.params.id, function(err, user) {
    res.render('users-edit', {user: user});
  })
})


//add address info to user (update)
app.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
        if (this.New_user == true) {
      res.redirect(`/users/${user._id}/dogs/new`)
      this.New_user = false;
  } else {
      res.redirect(`/users/${user._id}`)
  }
    })
    .catch(err => {
      console.log(err.message)
    })
})



app.delete('/users/:id', function (req, res) {
  console.log("DELETE user")
  User.findByIdAndRemove(req.params.id).then((user) => {
    res.redirect('/users');
  }).catch((err) => {
    console.log(err.message);
  })
})





// get the change screen
app.get('/users/:id/change', (req, res) => {
    User.findById(req.params.id).then((user) => {
  res.render('users-change', { user: user });
})
});


// view a user profile
app.get('/users/:id', (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.render('users-show', { user: user })
  }).catch((err) => {
    console.log(err.message);
  })
})




// NEW dog
app.get('/users/:id/dogs/new', (req, res) => {
User.findById(req.params.id).then((user) => {
  res.render('new-dog-form', {});
})
})

// CREATE dog
//add address info to user (update)
app.post('/users/:id/dogs', (req, res) => {
User.findById(req.params.id).then((user) => {
  Dog.create(req.body).then((dog) => {
    res.redirect(`/users/${user._id}/dogs`)
  }).catch((err) => {
    console.log(err.message);
  })
})
})

app.get('/users/:id/dogs', (req, res) => {
  Dog.find()
    .then(dogs => {
         res.render('dogs-index', { dogs: dogs});
    })
});



//Wireframe-Planning

//Loading
app.get('/', (req, res) => {
  res.render('loading', {});
});

app.listen(7000, () => {
  console.log('App listening on port 7000!')
});
