const express= require("express");
const app= express();
require("./db/conn");
const Student= require("./models/students");
const port= 8000;

app.use(express.json());

app.post("/students",async(req,res)=>{
    try{
        //console.log(req.body);
        const user= new Student(req.body)
        const data= await user.save();
        res.send(data);
        console.log(data);
    }
    catch(e){
        res.send(e);
    }
   
})
/////// get students 
app.get("/students",async(req,res)=>{
     try{
        const data= await Student.find();
        res.send(data);
     }
     catch(e){
        res.send(e);
    }
})
/////// get students by id
app.get("/students/:id",async(req,res)=>{
    try{
        const _id= req.params.id;
       const data= await Student.find({_id: _id});
       res.send(data);
    }
    catch(e){
       res.send(e);
   }
})

////////////  update student by id

/*app.patch("/students/:id",async(req,res)=>{
    try{
        const _id= req.params.id;
       const data= await Student.findByIdAndUpdate({_id: _id},req.body,{new:true});
       res.send(data);
    }
    catch(e){
       res.send(e);
   }
})*/
app.patch("/students/:no",async(req,res)=>{
    try{
        const number= req.params.no;
       const data= await Student.updateOne({phone: number},req.body,{new:true});
       res.send(data);
       console.log(data);
    }
    catch(e){
       res.send(e);
   }
})
app.delete("/students/:id", async(req,res)=>{
    try{
        const id= req.params.id;
        const data= await Student.findByIdAndDelete({_id:id});
        if(!data){
            return res.status(404).send();
        }
        res.send(data);
    }
    catch(e){
        res.send(e);
    }
})



app.listen(port,()=>{
    console.log(`connetion successful at ${port}`)
})