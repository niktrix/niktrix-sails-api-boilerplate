
module.exports.isEmailExists = function(useremail) {
  User.find({email:useremail}).exec(function(err,user){
			sails.log(user.length);
			if(user.length==0){
				sails.log("user exists");
			 	return 0;
			 }
			 sails.log("user exists");
			 return 1;
		})
};

module.exports.currentUser = function(params,cb){

	User.find({email:params.email}).exec(function(err,user){
		if(err){
			cb(err);
			return err;
		}else{
			cb(user);
			return user;
		}
	})
}