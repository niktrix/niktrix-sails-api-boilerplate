/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// is email/password valid
	//
	//admin
	// listusers
	// disable user
	createUser: function(req,res){
		var params = req.params.all();

		 User.find({email:params.data.email}).exec(function(err,user){
			if(user.length>0){
				 res.json({ status : "fail",message : "User with same email exists"});
			 }else{
			 User.create(params.data).exec(function(err,creates){
			 	if(err){res.json({ status : "fail",data : err});}else{
				res.json({ status : "success",data : creates});}
			 });
			}
			  
		})
	},

	login: function(req,res){
		var params = req.params.all();
		User.find({email:params.email,password:params.password}).exec(function(err,user){
			if(user.length>0){
				return res.ok({ status : "success",data : user,message : ""});
			}else{
				return res.ok({ status : "fail",message : "Wrong username or password"});
			}
		});
	},

	list: function(req,res){
		var params = req.params.all();
		User.find().exec(function(err,user){
			if(user.length>0){
				return res.ok(user);
			}else{
				return res.ok({user:"not exist"});
			}
		});
	}


 

	
};

