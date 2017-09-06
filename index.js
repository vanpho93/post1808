const express = require('express');
const reload = require('reload'); // eslint-disable-line
// middleware
const bodyParser = require('body-parser');

const parser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(express.static('./public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

app.post('/signin', parser, (req, res) => {
    console.log(req.body);
    res.send('Xin chao');
});

app.post('/tinh', parser, (req, res) => {
    //TODO HERE
});
reload(app);

app.listen(3000, () => console.log('Server started'));
