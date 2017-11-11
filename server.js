const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');

const bodyParser = require('body-parser');

const middleware = require('./middleware');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get our API routes

// const public_books_routes = require('./server/routes/public/booksRoutes');
// const public_publisher_routes = require('./server/routes/public/publisherRoutes');
// const public_auth_routes = require('./server/routes/public/auth_routes');

// const private_books_routes = require('./server/routes/private/booksRoutes');
// const private_carts_routes = require('./server/routes/private/cartsRoutes');
// const private_account_routes = require('./server/routes/private/accountRoutes');
// const private_publisher_routes = require('./server/routes/private/publisherRoutes');
// const private_order_routes = require('./server/routes/private/orderRoutes');


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


//Database connection
var DB = 'localhost:27017/registrator'; 
mongoose.connect(DB, function(err){
  if(err){
    return err;
  }
  else{
    console.log('Successfully connected to ' + DB);
  }
});

///Set PUBLIC Api Routes
// app.use('/api/public/books', public_books_routes);
// app.use('/api/public/publisher', public_publisher_routes);
// app.use('/api/public/account', public_auth_routes);

//Set PRIVATE Api Routes which requires authentication!
//app.use('/api/private/books',middleware.authenticate, private_books_routes);
// app.use('/api/private/carts', middleware.authenticate,private_carts_routes);
// app.use('/api/private/account',middleware.authenticate, private_account_routes);
// app.use('/api/private/orders',middleware.authenticate,private_order_routes);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3001';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
