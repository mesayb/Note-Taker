const express = require('express');
const PORT = process.env.PORT || 8080;
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, 'public')));

require('./db/routes/apiRoutes')(app);

require('./db/routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log('listening for requests')
})



















