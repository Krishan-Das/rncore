import V2User from "../models/v2/V2User.model.js";

const v2ApiKeyAuth = async (req, res, next) => {
  try {
    const { apiKey } = req.params;
    
    const user = await V2User.findOne({ apiKey });
    if (!user) {
      return res.status(401).json({
        message:"Invalid API URL"
      });
    }

    req.user = user;
    next();
  } catch(error){
    res.status(500).json({
      message:error.message
    });
  }
};


export default v2ApiKeyAuth;