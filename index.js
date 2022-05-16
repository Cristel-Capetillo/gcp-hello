const express = require('express');
const app = express();

const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore();
const kind = 'customer';

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the customers app!')
});

app.get('/getCustomers', (req, res) => {
    var query = datastore.createQuery(kind);

    datastore.runQuery(query, (err, data) => {
        if (err)
            console.log(err);
        else
            var customers = data.map((customer) => ({ id: customer[datastore.KEY].id, ...customer }));
        res.json(customers);
    });
});

app.get('/getCustomer', (req, res) => {
    console.log(req.query);
    const customerId = datastore.key([kind, parseInt(req.query.customerId)]);
    const query = datastore.createQuery(kind).filter('__key__', '=', customerId);
    datastore.runQuery(query, (err, data) => {
        if (err)
            console.log(err);
        else
            res.json(data[0]);
    });
});

exports.funcone = app;