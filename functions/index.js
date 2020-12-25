const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I2EW9JJBvgEwazl0Gx5DqokxB6FIHQ91V7yGQieSy2TT3b1IXhQzDQ6Tr9XVNITu0JbPkjFzDamqg6lpGEfowMZ00euplblhx');


//API


//App config
const app = express();


//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API ROUTES
app.get('/', (request, response) => response.status(200).send('Hello'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app);