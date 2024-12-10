const express = require('express');
const marked = require('marked');
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

app.get('/blog/1', (req, res) => {
  // Path to the Markdown file (make sure the markdown file exists)
  const markdownFilePath = path.join(__dirname, '/blog/blog1.md');

  // Read the markdown file asynchronously
  fs.readFile(markdownFilePath, 'utf-8', (err, data) => {
    if (err) {
      // If there's an error reading the file, send a 500 status with an error message
      res.status(500).send('Error reading the blog markdown file');
      return;
    }

    // Convert the Markdown content to HTML using `marked`
    const htmlContent = marked(data);

    // Create a basic HTML structure
    const htmlPage = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Blog</title>
        <link rel="stylesheet" href="/styles.css"> <!-- Link to a custom stylesheet -->
      </head>
      <body>
        <header>
          <h1>Joshua's Blog</h1>
        </header>
        <main>
          ${htmlContent}
        </main>
      </body>
      </html>
    `;

    // Send the generated HTML as a response
    res.send(htmlPage);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});