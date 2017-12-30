const Model = require('../models/todo');

class Todo {
  static findAll(req,res){
    console.log(req.user)
    Model.find({
      author:req.user._id
    },(err,rows)=>{
      if(err){
        res.json({message:`err`})
      } else {
        res.json({message:`this is your todoList`,rows:rows})
      }
    })
  }

  static crate(req,res){
    let obj = {
      author:req.user._id,
      title : req.body.title,
      completed : req.body.completed || false
    }
   Model.create(obj,(err,rows)=>{
      if(err){
        res.json({message:err})
      }else {
        res.json({message:`your list was created`,rows:rows})
      }
    })
  }

  static remove(req,res){
    Model.findByIdAndRemove(req.params.id,(err,rows)=>{
      if(err){
        res.json({message:err})
      }else{
        res.json({message:`your list with id : ${req.param._id} has been deleted`,rows:rows})
      }
    })
  }

  static update(req,res){
    let obj = {
      title:req.body.title,
    }
    Model.findOneAndUpdate({
      _id:req.params.id,
      author:req.user._id
    },obj,(err,rows)=>{
      if(err){
        res.json({message:err})
      }else {
        res.json({message:`your data in id : ${req.params.id} has been updated`,rows:rows})
      }
    })
  }


  static markCompleted(req,res){
    let obj = {
      completed:req.body.completed === '1'?true:false
    }
    Model.findOneAndUpdate({
      _id:req.params.id,
      author:req.user._id
    },obj,
    {new:true}
    ,(err,rows)=>{
      if(err){
        res.json({message:err})
      }else {
        res.json({message:`your data in id : ${req.params.id} has been updated`,rows:rows})
      }
    })
  }
}

module.exports = Todo;
