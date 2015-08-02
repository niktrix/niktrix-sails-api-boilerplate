

module.exports = function(req, res, next) {
var params = req.params.all();
User.findOne({email:params.email}).exec(function(err,user){
	if(user)  {
		next();
	}else{
		return res.forbidden('You are not permitted to perform this action.');
	}
	

});


}