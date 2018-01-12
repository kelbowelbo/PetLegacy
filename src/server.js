const express = require('express');
// this is our authentication module
const passport = require('passport');
// that tells passport how to authenticate for facebook
const facebookStrategy = require('passport-facebook').Strategy;
//the node module to make API requests. In this model, I will be authorizing the backend server.
const request = require('request');
// vvvvvv   this is an extension for express.  "Your session is about to expire" or "session cookies" - a bucket
// of data that represents one session between you and the web server, where all your data is.  This allows
// express to manage the session for you.  Notes who is making the request.  The front end doesn't authenticate, the backed is.
// what it amounts to an array of session ids.
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

// FB App
const FACEBOOK_APP_ID = process.env.facebook_app_id || '520230858343977';
const FACEBOOK_APP_SECRET = process.env.facebook_secret;

const PORT = process.env.PORT || 8080;
const app = express();

var myURL = `http://localhost:8080`;
var myFbCallbackURL = `${myURL}/auth/facebook/done`;
if (process.env.JAWSDB_URL) {
	// Running in heroku.
	myFbCallbackURL = `/auth/facebook/done`;
	myURL = `https://infinite-castle-11256.herokuapp.com`;
}

// App setup
passport.use(new facebookStrategy({
	clientID: FACEBOOK_APP_ID,
	clientSecret: FACEBOOK_APP_SECRET,
	callbackURL: myFbCallbackURL
},
function(accessToken, refreshToken, profile, done) {
	console.log(`${profile.displayName} has logged in`);
	profile.accessToken = accessToken;
	done(null, profile);
}));

// Must have these two following functions or it won't work.
passport.serializeUser(function(user, done) {
	done(null, user);
});
// calls every time it gets it out of the cache, every time the user makes a
// request, you get a session cookie and we look up that users info, passport will
// use this to id the user.
passport.deserializeUser(function(user, done) {
	done(null, user);
});

app.enable('trust proxy');
app.use(session({
	secret: 'arbitrary string',
	resave: false,
	saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.get(
	'/auth/facebook',
	passport.authenticate('facebook'));

app.get(
	'/auth/facebook/done',
	passport.authenticate('facebook', {
		successRedirect: '/loggedin',
		failureRedirect: '/'
	}));

const db = require('../app/models/orm.js');
app.get('/loggedin', (req, res) => {
	db.ensureUserExists(req.user.id, () => {
		var gridURL = `http://localhost:3000/grid`;
		if (process.env.JAWSDB_URL) {
			gridURL = `/grid`;
		}
		res.redirect(gridURL);
	});
});

// Add api routes
const apiRoutes = require('../app/route/api-routes.js');
app.use(apiRoutes);

if (process.env.JAWSDB_URL) {
	// Serve static files from the React app
	app.use(express.static(path.join(__dirname, '/../frontend/build')));

	// The "catchall" handler: for any request that doesn't
	// match one above, send back React's index.html file.
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
	});
}

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
