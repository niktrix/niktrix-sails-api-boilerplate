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
		Candidate.find().exec(function(err,candidates){
			res.ok(candidates);
		});
	},

	remove:function(req,res){
		var param = req.params.all();
				Candidate.destroy({id:param.id}).exec(function(err){
			 console.log('The record has been deleted');
		});
	}
	
	
};

