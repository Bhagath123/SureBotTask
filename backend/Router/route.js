const express=  require('express');
const Post=require('../models/post');
const router =express.Router();
const bcrypt = require('bcrypt');
router.post('/register',(req,res,next)=>{
  password=req.body.password
  bcrypt.hash(password,12).then(hashedPassword =>{
    const post=  new Post({
      name:req.body.name,
      email:req.body.email,
      imageUrl:req.body.imageUrl,
      password:hashedPassword
    });
    post.save().then(data=>{
      res.json(data)
    }).catch(error=>{
      console.log(error.message
      )
    res.json({error: error.message})

    });
  });
  })



router.post('/login',(req,res,next)=>{

  Post.find({email:req.body.email}).then(data=>{
    if(!bcrypt.compare(req.body.password, data[0].password)) {
      return res.json({data:"false"});
  }
    if(data.length>0 ){

      return res.json({data:"true"})
    }
    else{
      res.json({data:"false"});
    }
  }).catch(err=>{
    console.log(err);
  })
});
router.get('/login/:email',(req,res,next)=>{
  Post.find({email:req.params.email}).then(data=>{
    res.json(data);
  }).catch(err=>{
    console.log(err);

  })
})
module.exports=router;




