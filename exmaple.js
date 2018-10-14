//Exmaple of a nested object


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var CustomerModel = mongoose.model('CustomerModel', {
    firstName: String,
    lastName: String,
    company: String,
    connectInfo: {
        tel: [Number],
        email: [String],
        address: {
            city: String,
            street: String,
            houseNumber: String
        }
    }
});

//create a record
var customer = new CustomerModel({
    firstName: 'Ashish',
    lastName: 'Suthar',
    company: 'asis',
    connectInfo: {
        tel: [12345,67890],
        email: ['me@a.com','you@a.com'],
        address: {
            city: 'x',
            street: 'y',
            houseNumber: 'x-1'
        }
    }
});

//insert customer object
customer.save((err,cust) => {
    if(err) return console.error(err);

    //this will print inserted record from database
    //console.log(cust);
});


// display any data from CustomerModel
CustomerModel.findOne({firstName:'Ashish'}, (err,cust) => {
    if(err) return console.error(err);

    //to print stored data
    console.log(cust.connectInfo.tel[0]); //output 12345
});


//update inner record
CustomerModel.update(
    {firstName: 'Ashish'},
    {$set: {"connectInfo.tel.0": 54320}}
    );
