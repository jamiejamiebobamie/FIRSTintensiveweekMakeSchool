const express = require('express')
const app = express()

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let users = [
    {name: "Frank"},
    {name: "Cynthia"}
];

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/users', (req, res) => {
  res.render('users-index', { users: users });
})

app.listen(7000, () => {
  console.log('App listening on port 7000!')
})
