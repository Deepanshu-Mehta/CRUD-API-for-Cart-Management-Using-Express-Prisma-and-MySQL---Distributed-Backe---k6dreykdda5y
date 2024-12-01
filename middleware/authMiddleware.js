const { getAuthKey } = require("./authkey");

const authMiddleware = (req,res,next)=>{
    const {apiauthkey} = req.headers;
    if(!apiauthkey){
        return res.status(403).json({error: "apiauthkey is missing or invalid"});
    }
    if(apiauthkey !== getAuthKey()){
        return res.status(403).json({error: "Failed to authenticate apiauthkey"});
    }
    next();

}

module.exports = authMiddleware;