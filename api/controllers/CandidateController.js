/**
 * CandidateController
 *
 * @description :: Server-side logic for managing candidates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// list candidates
	// update candidates
	// delete candidate
	// create candidate

	list:function(req,res){
		var currentUser;
		var params = req.params.all();
		console.log(params.email);
		console.log(params.password);
		UserManager.currentUser(params,function(user){
			currentUser = user;
		});
		console.log(params.filter);
		Candidate.find().where(params.filter.where).paginate(params.filter.page).exec(function(err,candidates){
			 	
			if(err){
					res.json({ status : "fail",data: err});
				}else{
					res.json({ status : "success",data: candidates});
				}
		});
	},

	remove:function(req,res){
		var param = req.params.all();
				Candidate.destroy({id:param.id}).exec(function(err){
			 console.log('The record has been deleted');
		});
	},
	create: function(req,res){
		var params = req.params.all();
		UserManager.currentUser(params,function(user){
			currentUser = user;
			params.data.createdBy = user;
			console.log(user.$id);
			Candidate.create(params.data).exec(function(err,creates){
				if(err){
					res.json({ status : "fail",data: err});
				}else{
					res.json({ status : "success",data: creates});
				}
		 });
		});

		
		 
	}
	
	
};

