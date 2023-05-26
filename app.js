//imports
const express = require('express');
const path = require('path');

//modules
const shopRoutes = require('./routes/shop.js');
const menuRoutes = require('./routes/menu.js');

const app = express();

app.use(menuRoutes);
app.use(shopRoutes);


app.listen(3000);