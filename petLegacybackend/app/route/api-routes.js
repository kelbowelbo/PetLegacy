const db = require('../models/orm');
const express = require('express');
const app = express();

// Set skipAuth to true to bypass authentication
const skipAuth = false;

//OWNER
// to use and modify pet's owner information
function isLoggedIn() {
	return function(req, res, next) {
		if (skipAuth) {
			// Don't authenticate
			return next();
		}
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/auth/facebook');
		}
	}
}

app.get("/api/owner/:id", isLoggedIn(), function(req, res){
	db.owners.find({
		where: {
			id: req.params.id
		}
	})
	.then(function(results){
		res.json(results);
	})
});

app.get("/api/myOwnerId/", isLoggedIn(), function(req, res){
	// This function requires authentication to be on.
	console.log(`/api/myOwnerId for ${req.user.id}`);
	db.owners.find({
		where: {
			auth_id: req.user.id
		},
		attributes: [
			'id'
		]
	})
	.then(function(results){
		res.json(results);
	})
});

app.post("/api/newOwner", isLoggedIn(), function(req, res){
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
app.get("/api/pet/:id", isLoggedIn(), function(req, res){
	db.pets.find({
		where: {
			id: req.params.id
		}
	})
	.then(function(results){
		res.json(results);
	})
});

app.post("/api/newPet", isLoggedIn(), function(req, res){
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

app.get("/api/pets/owner/:id", isLoggedIn(), function(req, res){
	db.pets.findAll({
		where: {
			owner_id: req.params.id
		}
	})
	.then(function(results){
		res.json(results);
	})
});

app.get("/api/pets/:gender/:breed", isLoggedIn(), function(req, res) {
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

module.exports = app;
