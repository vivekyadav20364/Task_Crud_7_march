const Todo_Model=require("../models/schema");

const handleSave = async(req, res) => {
    const {description}=req.body;
    //console.log("Body",req.body)
    if(!description) res.status(400).send("empty task");
    else {
      const obj={
        description
      }
      const list=new Todo_Model(obj);
      const resp=await list.save();
      if(resp) res.status(201).send("Task added successfully");
      else res.status(400).send("Error in adding task");
    }
};

const handleDelete = async(req, res) => {
    const id=req.params.id;
    console.log(id);
    const resp= await Todo_Model.findByIdAndDelete(id);
    if(resp){
    res.status(200).send("Task deleted successfully")
    }
    else{
     res.status(400).send("Error in deletion");
    }  
};

const handleUpdate = async(req, res) => {
    const id =req.params.id;
    const description=req.body.description;
    const resp=await Todo_Model.findByIdAndUpdate(id,{description});
    if(resp){
        res.status(201).send("Task updated successfully");
    }
    else{
      res.status(400).send("Error in updating");
    }
};

const handleShow = async (req, res) => {
  try {
    const resp = await Todo_Model.find({});
    if (resp) res.status(200).json(resp);
    else {
      res.status(400).send("Please try again");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json("Error in fetching");
  }
};

module.exports = { handleSave, handleDelete, handleShow, handleUpdate };
