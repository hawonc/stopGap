const express = require('express');
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/images'));
app.set('view engine', 'ejs');

resumeAnswer = 0

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/upgrade.html');
});

app.get('/resume', (req, res) => {
  a = Math.floor(Math.random() * 10)+ 1;
  b = Math.floor(Math.random() * 10)+ 1;
  resumeAnswer = a + b
  res.render('resume', { question: 'What is ' + a + ' plus ' + b + '?'});
});

app.post('/review', (req, res) => {
  if (req.body.answer == resumeAnswer) {
      res.contentType("application/pdf");
      res.sendFile(__dirname + "/templates/resume.pdf");
  } else {
    res.sendFile(__dirname + '/templates/incorrect.html');
  }
});

app.get('/progress', (req, res) => {
  res.redirect('https://silly-jobaria-322.notion.site/Website-To-Dos-11d78001dcbf807ab932cb0903b4c3df');
});

app.get('/socials', (req, res) => {
  res.sendFile(__dirname + '/templates/socials.html');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});