const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
var sanitizer = require('sanitizer');
const sgMail = require('@sendgrid/mail')
const AWS = require('aws-sdk');

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

AWS.config.update({
    region: process.env.AWS_SES_REGION,
    apiVersion: 'latest',
    credentials:{
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

const ses = new AWS.SES();

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
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
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

const sendEmail = (res,message, from) => {
    const params = {
        Destination: {
            ToAddresses: [process.env.TO_EMAIL]
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: message
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: "James Website Contact Form"
            }
        },
        ReturnPath: from ? from : process.env.FROM_EMAIL,
        Source: from ? from : process.env.FROM_EMAIL,
    };

    ses.sendEmail(params, (err, data) => {
        if (err) {
            res.status(500).send({message: "Error in sending the email"})
            return console.log(err, err.stack);
        } else {
            console.log("Email sent.", data);
            res.send({message: "Email sent successfully"})
        }
    });
};

app.post('/api/emailses', (req, res) => {
    const nameValue = sanitizer.sanitize(req.body.name);
    const emailValue = sanitizer.sanitize(req.body.email);
    const messageValue = sanitizer.sanitize(req.body.message);

    html= `
    <h1>Name:</h1>
    <p>${nameValue}</p>
    <h1>Email:</h1>
    <p>${emailValue}</p>
    <h1>Message:</h1>
    <p>${messageValue}</p>
    `    

    sendEmail(res,html);

    }

);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`);
});