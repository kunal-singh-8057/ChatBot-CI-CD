const userModels = require("../Models/userModles");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET
const {GoogleGenerativeAI} = require("@google/generative-ai");
const KEY = process.env.CLOUD_KEY

const register = async(req,res)=>{
    
    const{email,password} = req.body;

    const users = await userModels.findOne({email})

    if(users) return res.status(404).json("failed")
    
    const hashpassword = await bcrypt.hash(password,10);

    await userModels.create({email,password:hashpassword})
    
    res.status(201).json("success");


}


const login = async(req,res)=>{
    
    const{email,password} = req.body

    let user = await userModels.findOne({email})

    if(!user) return res.status(404).json("failed")
    
    const ispassword = await bcrypt.compare(password,user.password)

    if(!ispassword) return res.status(404).json("failed")

    const token =  await  jwt.sign({_id:user._id},JWT_SECRET)

    res.status(201).cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*1000
    }).json("success")

}

const viewusers = async(req,res)=>{

    const view = await userModels.find()

    res.status(201).json({
        success:true,
        view
    })
}

const verify = async(req,res)=>{
  
    res.status(201).json("success")

}


const genAi = new GoogleGenerativeAI(process.env.CLOUD_KEY)
const model = genAi.getGenerativeModel({model: "gemini-1.5-flash"})

const prompt = "what is gemini"


const generate = async(req,res)=>{
    try {
        const result =  await model.generateContent(prompt)
        res.status(201).json(result.response.text())
    } catch (error) {
        console.log(error)
    }
}


/*const getcontent = async(req,res)=>{
    try {
        const data = req.body.question
        const result = await generate(data)

        res.send({
            "result":result
        })
    } catch (error) {
        console.log(error)
    }
}
*/

module.exports = {register,viewusers,login,verify,generate};
