const { body, validationResult } = require('express-validator');


const loginRules=[
    body('email','name is required').isEmail().normalizeEmail(),
    body('password','password must have at least 6 characters..').isLength({min:6})

]

const registerRules=[
    body('firstName','firstName is required').not().isEmpty(),
    body('lastName','lastName is required').not().isEmpty(),
    body('email','email is required').isEmail().normalizeEmail(),
    body('password','password must have at least 6 characters..').isLength({min:6})

]
const validator=(req,res,next)=>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
      next()
}
module.exports={registerRules,validator,loginRules}