const mongoose = require('mongoose');

const Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;

let taskSchema = new Schema({
    author   : {
        type : Schema.Types.ObjectId,
        ref  : 'UserModel'
    },
    title     : String,
    completed : Boolean,
},{timestamps:{}});

let Todo = mongoose.model('Todo', taskSchema);
module.exports = Todo;
