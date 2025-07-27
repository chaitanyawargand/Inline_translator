const express = require('express');
const translateroutes = require('./translaterroutes');
const app =express();
const morgan =require('morgan');

app.use(express.json());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// routes
app.use('/api/v1/translator',translateroutes);


module.exports = app;