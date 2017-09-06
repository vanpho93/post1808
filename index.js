const express = require('express');
const Tinh = require('./Tinh');
// const reload = require('reload'); // eslint-disable-line
// middleware
const bodyParser = require('body-parser');

const parser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(express.static('./public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.post('/signin', parser, (req, res) => {
    console.log(req.body);
    res.send('Xin chao');
});

app.post('/tinh', parser, (req, res) => {
    const { soa, sob, tenPhepTinh } = req.body;
    const pt = new Tinh(tenPhepTinh, soa, sob);
    res.send(pt.getResultString());
});

// reload(app);

app.listen(process.env.PORT || 3000, () => console.log('Server started'));
//http://pixelhint.com/capture-free-responsive-bootstrap-app-landing-page-theme/
