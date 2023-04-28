
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
Underscoreid:String , 


pd:String 



})

module.exports = {
  Product : mongoose.model('product', productSchema),
}

