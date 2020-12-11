const mongoose = require('mongoose')
// const url = 'mongodb://localhost/shopping';
// mongoose.connect(url, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true })
//     .then(() => console.log('db connected...'))
//     .catch(err => console.error(err));
const Schema = mongoose.Schema

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    gender: { type: String, required: true }
})
//
module.exports = new mongoose.model('Menu', menuSchema)