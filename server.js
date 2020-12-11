require('dotenv').config()
const express = require('express');
const app = express();
const ejs = require('ejs') 
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
const flash = require('express-flash')
// const session = require('express-session')
// const MongoDbStore = require('connect-mongo')(session)
// const passport = require('passport')
// const Emitter = require('events')

// Database connection
// const url = 'mongodb://localhost/shopping';
const connString = 'mongodb+srv://user_pradhan:TVI1DCfplDiuBLJw@cluster0.5kgs2.mongodb.net/shopping?retryWrites=true&w=majority';

mongoose.connect(connString,{ useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true })
        .then(() => console.log('db connected...'))
        .catch(err => console.error(err));
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});


// const menuSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     image: { type: String, required: true },
//     price: { type: Number, required: true },
//     gender: { type: String, required: true }
// })


// const Menu = new mongoose.model('Menu', menuSchema);

// async function index(req, res) {
//     const items = await Menu.find()
//     return res.render('home', { items: items })
// }

// // // Session store
// let mongoStore = new MongoDbStore({
//     mongooseConnection: connection,
//     collection: 'sessions'
// })


// // // Session config
// app.use(session({
//     secret: process.env.COOKIE_SECRET,
//     resave: false,
//     // store: mongoStore,
//     saveUninitialized: false,
//     cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour
// }))

app.use(flash())


// Assets
app.use(express.static('public'))

// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resourses/views'))
app.set('view engine', 'ejs')


require('./routes/web')(app)
// app.use((req, res) => {
//     res.status(404).render('errors/404')
// })

app.listen(PORT,function(){
    console.log("App is Listening");
});