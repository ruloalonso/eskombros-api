const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');

require('./config/db.config');
require('./config/passport.config').setup(passport);
const corsConfig = require('./config/cors.config');

const usersRouter = require('./routes/users.routes');
const sessionsRouter = require('./routes/sessions.routes');
const gamesRouter = require('./routes/games.routes');
const playsRouter = require('./routes/plays.routes');
const sportsRouter = require('./routes/sports.routes');
const eskombrosRouter = require('./routes/eskombros.routes');
const contendersRouter = require('./routes/contenders.routes');
const teamsRouter = require('./routes/teams.routes');
const placesRouter = require('./routes/places.routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsConfig));

// TODO => review .env and secret
app.use(session({
  secret: process.env.COOKIE_SECRET || 'Super Secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2419200000
  }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);
app.use('/games', gamesRouter);
app.use('/plays', playsRouter);
app.use('/sports', sportsRouter);
app.use('/eskombros', eskombrosRouter);
app.use('/contenders', contendersRouter);
app.use('/teams', teamsRouter);
app.use('/places', placesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function (error, req, res, next) {
  console.error(error);
  res.status(error.status || 500);
  
  const data = {}

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400);
    for (field of Object.keys(error.errors)) {
      error.errors[field] = error.errors[field].message
    }
    data.errors = error.errors
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, 'Resource not found')
  }

  data.message = error.message;
  res.json(data);
});

module.exports = app;
