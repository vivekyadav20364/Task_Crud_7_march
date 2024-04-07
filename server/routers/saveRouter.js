const express=require('express');
const router=express.Router();
const {handleSave,handleDelete,handleShow,handleUpdate}=require('../controllers/dataControllers');

router.post("/save",handleSave);
router.get("/show",handleShow);
router.delete("/delete/:id",handleDelete);
router.put("/update/:id",handleUpdate);

module.exports=router;