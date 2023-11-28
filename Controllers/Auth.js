const registerUser = async (req, res) => {
  res.send("Reg USer")
};

const loginUser = async (req, res) => {
  res.send("Login USer")
};


module.exports = {
    registerUser,
    loginUser
}