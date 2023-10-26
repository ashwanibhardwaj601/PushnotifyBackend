const router=require("express").Router();
const tokencontroller=require("../controller/tokencontroller")
router.post("/settoken",tokencontroller.settoken);
router.get("/gettoken",tokencontroller.gettoken);
router.post("/sendmsg",tokencontroller.sendMessage);
module.exports=router;