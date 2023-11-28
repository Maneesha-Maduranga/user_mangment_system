const routerNotFound =  (req, res) => {
    res.send('Route Doesnot Exist');
};

module.exports = {
    routerNotFound
}