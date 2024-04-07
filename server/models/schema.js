const mongoose=require("mongoose");

const Todo= new mongoose.Schema({
  description:{type:String}
})

const Todo_Model=mongoose.model("Todo_Tasks",Todo);

module.exports=Todo_Model;