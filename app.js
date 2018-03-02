const express = require('express');
const port = 3000;
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(path.join(__dirname, 'public'))));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');


// Require Routes and use them
const index = require('./routes/index');

app.use('/', index);



app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});