var path    = require('path'),
    express = require('express'),

    app = express();


app.set('views', path.join(__dirname, 'app/server/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app/client')));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(8000);
