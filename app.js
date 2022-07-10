const express=require('express');
const projectRoutes=require('./routes/project');
const bodyParse=require('body-parser');
const mongoose=require('mongoose')

const app=express();


app.use(bodyParse.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, DELETE, PUT, PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})

app.use(projectRoutes);

mongoose
  .connect(
    "mongodb+srv://Nokhalal:Nokhalal@cluster0.grwrf.mongodb.net/Resume?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));

