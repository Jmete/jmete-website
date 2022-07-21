const express = require('express');
const dotenv = require('dotenv');
const mg = require('mailgun-js');

dotenv.config();

const mailgun = () => mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/api/email', (req, res) => {
    const {nameValue, emailValue, messageValue} = req.body;
    mailgun().messages().send({
        from: 'James Website <contact@jamesmete.com>',
        to: `${emailValue}`,
        subject: "James Website Contact Form",
        html: `
        <h1>Name:</h1>
        <p>${nameValue}</p>
        <h1>Email:</h1>
        <p>${emailValue}</p>
        <h1>Message:</h1>
        <p>${messageValue}</p>
        `
    },
    (error,body) => {
        if (error) {
            console.log(error);
            res.status(500).send({message: "Error in sending the email"})
        } else {
            console.log(body);
            res.send({message: "Email sent successfully"})
        }
    }

    );
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`);
});