var expect = require("chai").expect;

describe("canary test", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function() {
    expect(true).to.be.true;
  });
});
var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/books", function() {
  // Before each test begins, create a new request server for testing
  // & delete all books from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: false });// force to true will restart db & delete all books
  });

  it("should find all books", function(done) {
    // Add some new books to the db to test with
    db.Books.bulkCreate([
      { title: "First Test Book", authors: "First Test Author" },
      { title: "Second Test Book", authors: "Second Test Author" }

    ]).then(function() {
      // Request the route that returns all books
      request.get("/api/books").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({ title: "First Test Book", authors: "First Test Author"});
          // expect(responseBody[1])
          // .to.be.an("object")
          // .that.includes({ title: "Second Test Book", authors: "Second Test Author"});

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
