const mongoose= require("mongoose");
mongoose.connect('mongodb://127.0.0.1:2017/myapp');
const PersonModel=mongoose.model('simplePerson',new mongoose.Schema
({fname:String,lname:String}));
module.exports=PersonModel;