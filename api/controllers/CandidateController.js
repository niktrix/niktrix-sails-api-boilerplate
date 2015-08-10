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
		UserManager.currentUser(params,function(user){
			currentUser = user;
		});
	
		Candidate.find().where(params.where).paginate(params.page).exec(function(err,candidates){
			res.ok(candidates);
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

