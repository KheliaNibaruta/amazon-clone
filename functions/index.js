const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require ("stripe")
('sk_test_51Ob76QBDqDFhvH0gBjJTdbpBnqS1QhpJsATVSPjSlyJzTq2bQKUKCz9VXYQLt7VuKDht4dGRqEsXYo6cIEeHicnl00JUm2gq3x');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received >>>!!!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "eur",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://127.0.0.1:5001/clone-218ce/us-central1/api