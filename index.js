const express= require('express')
var dbconnection=require('./db')
const path=require('path')
const {spawn}=require('child_process');
const app=express()
const DB_NAME='mern-ecommerce'
const ARCHIVE_PATH=path.join(__dirname,`${DB_NAME}.gzip`)
const cron = require('node-cron'); 
cron.schedule('*/2 * * * * ',()=>backupMongoDB)

backupMongoDB();
function backupMongoDB(){
    const child=spawn('mongodump',[
        `--db=${DB_NAME}`,
        `--archive=${ARCHIVE_PATH}`,
        `--gzip`
    ])
    child.stdout.on('data',(data)=>{
        console.log('stdout:\n',data)
    })

    child.stderr.on('data',(data)=>{
        console.log('stderr:\n',Buffer.from(data).toString())
    })

    child.on('error',(error)=>{
        console.log('errorL\n',error)
    })
    child.on('exit',(code,signal)=>{
        if(code) console.log('Process exit with code:',code)
        else if(signal) console.log('Process killed with signal:',signal)
        else console.log('Backup is successfull')
    })
}













app.get('/',(res,req)=>{
    res.setEncoding("from backend")
})
app.listen(5000,()=>console.log('server runnin'));
