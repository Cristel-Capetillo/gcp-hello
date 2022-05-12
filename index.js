const express = require('express');
const app = express();
const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore();
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('Welcome to the customers app!')
});

app.get('/getCustomers', (req, res) => {
    var query = datastore.createQuery('customer');

    datastore.runQuery(query, (err, data) => {
        if (err)
            console.log(err);
        else
            var customerId = data.map((customer) => ({ id: customer[datastore.KEY].id, ...customer }));
        res.send(customerId);
    });
});

app.get('/getCustomer', (req, res) => {
    console.log(req.params);
    const customerId = datastore.key(['customer', parseInt(req.params.customerId)]);
    const query = datastore.createQuery('customer').filter('__key__', '=', customerId);
    datastore.runQuery(query, (err, data) => {
        if (err)
            console.log(err);
        else
            res.send(data);
    });
});

app.use(cors({origin: '*'}));

exports.funcone = app;