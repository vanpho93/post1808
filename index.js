const express = require('express');
const reload = require('reload'); // eslint-disable-line

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

reload(app);

app.listen(3000, () => console.log('Server started'));
