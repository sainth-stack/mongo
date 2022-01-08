const mongoose=require('mongoose')
var mongoDBURL='mongodb+srv://Sai_12345:Sai_12345@cluster0.ucdww.mongodb.net/mern-ecommerce'
mongoose.connect(mongoDBURL,{useUnifiedTopology:true,useNewUrlParser:true})
var dbconnect=mongoose.connection
dbconnect.on('error',()=>{
    console.log('failed')
})
dbconnect.on('connected',()=>{
    console.log('success')
})
module.exports=mongoose