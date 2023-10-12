const Users=require("../models/appoint")

exports.getUsers=async (req,res,next)=>{

    try {
        const users= await Users.findAll();
        res.json(users)
      }
    catch(err) {
       console.log(err)
      }
    
};

exports.getSingleUser=async(req,res,next)=>{
    const id=req.params.id;
   
    try {
        const user=await Users.findAll({
            where: {
              id: id
            }
          });
          res.json(user)
      }
    catch(err) {
       console.log(err)
      }
    
      
}

exports.postUser=async (req,res,next)=>{
    const userDetails=req.body;
    try{
        const user = await Users.create(userDetails);
        res.json(user);
    }
    catch(err){
        console.log(err)
    }
   
};


exports.deleteUser=async (req,res,next)=>{
    const id=req.params.id;

    try{
        const deletedUser=await Users.destroy({
            where: {
              id: id
            }
          });
         res.json(deletedUser) 
    }
    catch(err){
         console.log(err)
    }
    
}