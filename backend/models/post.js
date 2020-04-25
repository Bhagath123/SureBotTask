const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const PostShema=mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique: true
  },
  imageUrl:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});
PostShema.plugin(uniqueValidator);
module.exports=mongoose.model('Post',PostShema);
