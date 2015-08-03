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
		 User.find({email:params.email}).exec(function(err,user){
			if(user.length>0){
				 res.json({user:"exists"});
			 }else{
			 User.create(params).exec(function(err,creates){
				res.json(creates);
			 });
			}
			  
		})
	},

	login: function(req,res){
		var params = req.params.all();
		User.find({email:params.email,password:params.password}).exec(function(err,user){
			if(user.length>0){
				return res.ok(user);
			}else{
				return res.ok({user:"not exist"});
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

