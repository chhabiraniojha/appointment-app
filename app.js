const express=require("express");
const bodyParser=require("body-parser")
const sequelize=require("./util/database");
const cors=require("cors")
const getUser=require("./Routes/appoint")


const app=express();
app.use(cors());



app.use(bodyParser.json({extended:false}))
app.use("/users",getUser)



sequelize.sync()
.then(result=>{
     app.listen(3000);
}).catch(err=>{
    console.log(err)
});