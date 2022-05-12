const express = require('express');
const app = express();

const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore();

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    var query = datastore.createQuery('customer');

    datastore.runQuery(query, (err, data) => {
        if (err)
            console.log(err);
        else
            var customerId = data.map((customer) => ({ id: customer[datastore.KEY].id, ...customer }));
        res.send(customerId);
    });
});

app.get('/:id', (req, res) => {
    console.log(req.query);
    const id = datastore.key(['customer', parseInt(req.query.id)]);
    const query = datastore.createQuery('customer').filter('__key__', '=', id);
    datastore.runQuery(query, (err, data) => {
        if (err)
            console.log(err);
        else
            res.send(data);
    });
});

exports.funcone = app;