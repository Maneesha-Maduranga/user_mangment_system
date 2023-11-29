const { User, userValidator } = require("../Models/User");
const { createToken } = require("../Utils/Jwt");

const getAllUser = async (req, res) => {
  const users = await User.find({}).select('-password');
  
  if(!users){
    res.status(404);
    throw new Error("Users not found.");
  }
  res.status(200).json({
    data:users
  })
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const { error } = userValidator(name, email, password);

  if (error) {
    res.status(400);
    throw new Error(error.message);
  }
  //Check name is allready register
  let user = await User.findOne({ name: name });

  if (user) {
    res.status(400);
    throw new Error("User Already Exist with given username");
  }

  //Create new user
  user = await User.create({
    name,
    email,
    password,
  });

  let resultUser = {
    id: user.id,
    name: user.name,
  };

  res.status(201).json({
    sucess: true,
    data: {
      user: resultUser,
    },
  });
};

module.exports = {
  getAllUser,
  createUser,
};
