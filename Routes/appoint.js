const express =require("express");
const appontController=require("../controller/appoint")

const router=express.Router();


router.get("/getUsers",appontController.getUsers);

router.get("/getUsers/:id",appontController.getSingleUser);

router.post("/postUser",appontController.postUser);

router.delete("/:id",appontController.deleteUser)

module.exports=router;