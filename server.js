const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret', //prevents hijacking of session
  cookie: {
    maxAge: 3600000, //session expires after 1hour
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
//force true= drops tables good for dev. switched to false after dev
sequelize.sync({ force: true }).then(() => { 
  app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}!`));
});
