const {User,userValidator} = require('../Models/User')

const registerUser = async (req, res) => {
  
  const { name, email, password } = req.body;
  const { error } = userValidator(name,email,password)

  if (error) {
    res.status(400)
    throw new Error(error.message)
  }
  //Check email is allready register
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

 res.send(user)


  
};

const loginUser = async (req, res) => {
  res.send("Login USer")
};


module.exports = {
    registerUser,
    loginUser
}