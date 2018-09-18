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

//Delete Books by id
app.delete("/api/books/:id", function(req, res) {
  db.Books.destroy({ where: { id: req.params.id } }).then(function(dbBooks) {
    res.json(dbBooks);
  });
});

//=================post methods (api)======================

// add new book to database get input from seller form req.body
app.post("/api/sellers", function(req, res) {
  db.Sellers.create(req.body).then(function(dbBooks) {
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

}


