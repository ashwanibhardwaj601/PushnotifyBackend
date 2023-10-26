const mongoose=require("mongoose");
const userSchema= mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
       
    }
},{
    timeStamp:true
});

module.exports=mongoose.model("user",userSchema);