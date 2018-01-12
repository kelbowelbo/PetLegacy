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
			pic: req.body.pic
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
	app.get("/api/pet/:id", function(req, res){
		db.pets.find({
			where: {
				id: req.params.id
			}
		})
		.then(function(results){
			res.json(results);
		})
	});

	app.post("/api/newPet", function(req, res){
		console.log("req.body:", req.body);
		db.pets.create({
			owner_id: req.body.owner_id,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			AKC_registered_name: req.body.last_name,
			breed: req.body.breed,
			zip_code: req.body.zip_code,
			birthdate: req.body.birthdate,
			gender: req.body.gender,
			pic: req.body.pic
		})
		.then(function(results){
			res.send({id: results.id});
		})
		.catch(function(err) {
			console.log("something");
		});
	});

	app.get("/api/pets/owner/:id", function(req, res){
		db.pets.findAll({
			where: {
				owner_id: req.params.id
			}
		})
		.then(function(results){
			res.json(results);
		})
	});

	app.get("/api/pets/:gender/:breed", function(req, res) {
		db.pets.findAll({
			where: {
				gender: req.params.gender,
				breed: req.params.breed
			}
		})
		.then(function(results){
			res.json(results);
		})
	});

}
