const {User,userValidator} = require('../Models/User')
const {createToken} = require('../Utils/Jwt')

const registerUser = async (req, res) => {
  
  const { name, email, password } = req.body;
  const { error } = userValidator(name,email,password)

  if (error) {
    res.status(400)
    throw new Error(error.message)
  }
  //Check name is allready register
  let user = await User.findOne({name:name})

  if(user){
    res.status(400)
    throw new Error("User Already Exist with given username")
  }
 
  //Create new user
  user = await User.create({
    name,
    email,
    password,
  });

  let tokenUser = {
    id:user.id,
    name:user.name,
  }

  let token = createToken({payload:tokenUser})
 
  res.status(201).json({
    sucess:true,
    data:{
      token:token,
      user:tokenUser
    }
  })

  
};

const loginUser = async (req, res) => {
  const { name, password } = req.body;

  let user = await User.findOne({ name:name });

  if (!user) {
    res.status(404)
    throw new Error('User Is Not Found With Given Username,Try again with register')
  }

  let isMatched = await user.validatePassword(password);

  if (!isMatched) {
    res.status(404)
    throw new Error('Enterd Password is Incorrect')
  }
  
  let tokenUser = {
    id:user.id,
    name:user.name,
  }

  let token = createToken({payload:tokenUser})
 
  res.status(200).json({
    sucess:true,
    data:{
      token:token,
      user:tokenUser
    }
  })
};


module.exports = {
    registerUser,
    loginUser
}