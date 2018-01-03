const bodyParser = require('body-parser');
const db = require('../models/orm');

module.exports = function(app) {

	app.use(bodyParser.json());

 //OWNER
// to use and modify pet's owner information

	app.get("/api/owner/:id", function(req, res){
		db.owners.find({
			where: {
          		id: req.params.id
        	}
		})
		.then(function(results){
			res.json(results);
		})
	});

	app.post("/api/newOwner", function(req, res){
		console.log("req.body:", req.body);
		db.owners.create({
			email: req.body.email,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			phone: req.body.phone,
			address: req.body.address,
		  zip_code: req.body.zip_code,
		  country: req.body.country,
		})
		.then(function(results){
			res.send({id: results.id});
		})
		.catch(function(err) {
			console.log("something");
		});
	});


// PETS
// to use and modify pet's information

};
