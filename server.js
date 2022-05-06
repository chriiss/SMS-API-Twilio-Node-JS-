const express = require('express')
const app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


app.use('/css',express.static(__dirname +'/css'));
app.use('/js',express.static(__dirname +'/js'));

app.set('view engine', 'ejs');

const smsText = {
  title: "Send",
  title_bis: "sms",
  send_message: "Message Send"
}

app.get('/', (req, res) => {
  res.render('home', {
    smsText: smsText
  })
})


app.post('/', (req, res, next) => {
  const accountSid = '***';
  const authToken = '***';
  const client = require('twilio')(accountSid, authToken);

  client.messages
  .create({
     body: `${req.body.message}`,
     from: '***',
     to: `${req.body.phone}`
   })
  .then(message => console.log(message.sid));
})

app.listen(8080)