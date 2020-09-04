
module.exports = {
    allowCros: function (req, res, next){
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Headers", 'Origin, X-Request-With, Content-Type, Accept, Authorization');
        res.header("Access-Control-Expose-Headers", 'Authorization, Uid');
        next();
    }
 
};
