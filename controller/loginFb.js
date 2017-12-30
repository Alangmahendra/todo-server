const Model = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
require('dotenv').config()

class Fblogin{
    static signin(req,res){
        Model.findOne({email:req.fbProfile.email})
        .then(user=>{
            
            if(!user){
                let password=Math.random().toString(36).substr(2,6)
                return Model.create({
                    name  : req.fbProfile.name,
                    email : req.fbProfile.email,
                    password : password
                })
                
            }
            return user
        }).then(user=>{
            
            const payload = {
                _id    : user._id,
              name     : user.name,
              email    : user.email,
              role     : user.role,
              todoList : user.todoList
            }
            
            jwt.sign(
                payload,process.env.SECRET_KEY,(err,token)=>{
                
                    if(!err){
                        res.status(200).json({message:`user telah dibuat`,data:token})
                    } else{
                        res.status(500).json({message:err})
                    }
                })
        }).catch(err=>{
            res.json({message:err})
        })
        // res.send({
        //     accessToken : req.body.accessToken,
        //     profile:req.fbProfile
        // })
    }
}

module.exports= Fblogin