const express = require('express');
const cors = require('cors');

const searchRoutes = require('./routes/search');
const indexRoutes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( cors() );

app.use(indexRoutes);
app.use(searchRoutes);

app.listen( 3000, () => console.log( 'listening on port 3000...' ) )