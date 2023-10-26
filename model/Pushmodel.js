const mongoose=require("mongoose");
const pushmodelschema= mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true,
    },
    id:{
        type:String,
      
    }
},{
    timeStamp:true
});

module.exports=mongoose.model("tokenmodel",pushmodelschema);