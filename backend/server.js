const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
var sanitizer = require('sanitizer');
const sgMail = require('@sendgrid/mail')

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express();

app.use(cors({
    origin: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/api/email', (req, res) => {
    const nameValue = sanitizer.sanitize(req.body.name);
    const emailValue = sanitizer.sanitize(req.body.email);
    const messageValue = sanitizer.sanitize(req.body.message);

    sgMail.send({
        from: 'James Website <james@jamesmete.com>',
        to: 'james@jamesmete.com',
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

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`);
});