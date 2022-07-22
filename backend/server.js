const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
var sanitizer = require('sanitizer');
const AWS = require('aws-sdk');

dotenv.config();

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

// enable cors
app.use(
    cors({
      origin: ['http://localhost','165.227.47.167'],
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );
  app.options(
    '*',
    cors({
      origin: ['http://localhost','165.227.47.167'],
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

app.post('/api/email', (req, res) => {
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