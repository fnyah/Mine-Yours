var db = require("../models");

module.exports = function(app) {
// find all Books
app.get("/api/books", function(req, res) {
  db.Books.findAll({}).then(function(dbBooks) {
    res.json(dbBooks);
  });
});

// find all books by id
app.get("/api/books/:id", function(req, res) {
  db.Books.findOne({ where: { id: req.params.id } }).then(function(dbBooks) {
    res.json(dbBooks);
  });
});

// find all Sellers
app.get("/api/sellers", function(req, res) {
  db.Sellers.findAll({}).then(function(dbBooks) {
    res.json(dbBooks);
  });
});

// find all sellers by id
app.get("/api/sellers/:id", function(req, res) {
  db.Sellers.findOne({ where: { id: req.params.id } }).then(function(dbBooks) {
    res.json(dbBooks);
  });
});

// find all items from cart
app.get("/api/carts", function(req, res) {
  db.Carts.findAll({}).then(function(dbBooks) {
    res.json(dbBooks);
  });
});

//=================post methods (api)======================

// add new seller to database, get input from seller form req.body
app.post("/api/sellers", function(req, res) {
  db.Sellers.create(req.body).then(function(dbBooks) {
    res.json(dbBooks);
  });
});

// add new book to database get input from api in the buyer.handlebars page
app.post("/api/books", function(req, res) {
  db.Books.create(req.body).then(function(dbBooks) {
    res.json(dbBooks);
  });
});

// add to cart from search.handlebars req.body
app.post("/api/carts", function(req, res) {
  db.Carts.create(req.body).then(function(dbBooks) {
    res.json(dbBooks);
  });
});


// login?????? check with team
app.post("/api/login", function(req, res) {
  // check email from database if user exists...
  // store user info to database if new user
  // take to seller page if seller
  // process order if buyer
  // update database??
});

//=================delete methods (api)======================
//Delete Books by id
app.delete("/api/books/:id", function(req, res) {
  db.Books.destroy({ where: { id: req.params.id } }).then(function(dbBooks) {
    res.json(dbBooks);
  });
});

}


