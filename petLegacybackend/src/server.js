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

// FB App
const FACEBOOK_APP_ID = '520230858343977';
const FACEBOOK_APP_SECRET = process.env.facebook_secret;

const PORT = 8080;
const app = express();

// App setup
passport.use(new facebookStrategy({
	clientID: FACEBOOK_APP_ID,
	clientSecret: FACEBOOK_APP_SECRET,
	callbackURL: `http://localhost:${PORT}/auth/facebook/done`
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

app.use(session({
	secret: 'arbitrary string',
	resave: false,
	saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
	let body = '<h1>oauth facebook homepage</h1>';
	// this body += is the same as body = body + whatever
	body += '<a href="/auth/facebook"> Click to log in</a>';
	res.send(body);
});

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
		// TODO: need to do something else for heroku
		res.redirect('http://localhost:3000/grid');
	});
});

// Add api routes
const apiRoutes = require('../app/route/api-routes.js');
app.use(apiRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
