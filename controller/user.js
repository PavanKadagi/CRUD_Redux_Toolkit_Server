const User = require('../models/userSchema');

const getAllUsers = async (req,res)=>{
    try {
        const allUser = await User.find({});
    res.status(200).json({data:allUser})
    } catch (error) {
        res.status(400).json({error:"Please check your internet...!"})
    }
}

const createUser = async(req,res)=>{
    try {
        // console.log(req.body)
        const {phoneVal,emailVal,nameVal} = req.body;
        const userExist = await User.findOne({$or:[{email:emailVal},{phone:phoneVal}]});
        // const userPhoneExist = await User.finde
    if (userExist) {
       res.status(422).json({ error: "Email or Phone Number already Exist...!" });
    }else{
     const createUser =    await User.create({
            name:nameVal,
            email:emailVal,
            phone:phoneVal
        });
        console.log("crerateuser",createUser)
        res.status(201).json({createUser})
    }
        
    } catch (error) {
        res.status(400).json({error})
    }
}

const updateUser = async (req,res)=>{
    try {
        const {phoneVal,emailVal,nameVal,user} = req.body;
      const rewriteUser =   await User.findByIdAndUpdate(
            {_id:user},
           {
            name:nameVal,
            email:emailVal,
            phone:phoneVal
           },
            {new:true}        
            )
            console.log("rewriteUser",rewriteUser)
     res.status(200).json({ rewriteUser });
        
    } catch (error) {
     res.status(400).json({ error: "Invalid Credientials...!" });
    }
}

const deleteUser = async (req,res)=>{
    console.log("delete")
    try {
       let findDeleteUser= await User.findByIdAndDelete({_id:req.params.id})
     res.status(200).json({ findDeleteUser });
    } catch (error) {
     res.status(400).json({ error: "Invalid Credientials...!" });    
    }
}

const singleUser = async (req,res)=>{
    try {
        console.log("single")
        const singleUser = await User.findById({_id:req.params.id});
        res.status(200).json({singleUser})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllUsers,createUser,updateUser,deleteUser,singleUser}