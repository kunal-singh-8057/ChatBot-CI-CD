const jwt = require("jsonwebtoken");

const verifyuser = async(req,res,next)=>{
    
    const token =  req.cookies.token;

    if(!token) 
    {
        
        res.status(404).json("failed")

    }

   const decode =   await jwt.verify(token,process.env.JWT_SECRET)
      next();
}


module.exports = verifyuser;