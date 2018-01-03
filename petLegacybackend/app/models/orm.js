var Sequelize = require('sequelize');

var configs = {
  "local": {
    "username": "root",
    "password": null,
    "database": "petLegacyDB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};

if (process.env.JAWSDB_URL) {
  var sherpaDB = new Sequelize(process.env.JAWSDB_URL);
} else {
  var sherpaDB = new Sequelize(configs['local'].database,
  configs['local'].username, configs['local'].password, configs['local']);
}

var owners = sherpaDB.define('owners', {
  first_name: Sequelize.STRING(100),
  last_name: Sequelize.STRING(100),
  address: Sequelize.STRING(100),
  zip_code: Sequelize.STRING(10),
  country: Sequelize.STRING(50),
  email: {
    type: Sequelize.STRING(40), unique: true
  },
  phone: Sequelize.STRING(20)
});

sherpaDB.sync().then(function() {
  // The line below for test purposes
  // petLegacyTests();
});

function petLegacyTests() {
  // Create a test user
  owners.create({
    email: 'kelly@sherpa.com',
    last_name: 'rene',
    first_name: 'kelly',
    phone: '123-456-7890',
  })
  .then(function(results) {
    console.log("Results:", results.get({plain: true}));
    console.log("----------");
    // Update the email for the user
    var userId = results.id;
    owners.update({
      email: 'kelly@imnotyoursherpa.com'
    }, {
      where: {
        id: userId
      }
    })
    .then(function(results) {
      console.log("Results:", results);
      console.log("----------");
      // Remove the user from the db
      owners.destroy({
        where: {
          id: userId
        }
      })
      .then(function(results) {
        console.log("Results:", results);
        console.log("----------");
      });
    });
  });
}

var db = {
	owners: owners
};
module.exports = db;
