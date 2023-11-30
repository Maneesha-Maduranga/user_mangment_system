const routerNotFound = (req, res) => {
  res.status(404).json({
    message:"Route Doesnot exist"
  })
};

module.exports = {
  routerNotFound,
};
