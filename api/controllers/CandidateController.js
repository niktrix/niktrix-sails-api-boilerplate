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
	count:function(req,res){

		Candidate.count().exec(function countCB(error, found) {
 		 res.json({ status : "success",data: {count:found}});
 	    });
	},

	uploadResume: function (req, res) {

		var params = req.params.all();
		if(params.data.id){
			console.log("exist");
		}else{
			console.log("nt exist");
		}
		var whereToupload = require('path').resolve(sails.config.appPath, '/assets/resumes');
        console.log("whereToupload",whereToupload);
        req.file('pdf').upload({
    // don't allow the total upload size to exceed ~10MB
       maxBytes: 10000000
 
  },function whenDone(err, uploadedFiles) {
    if (err) {
      return res.negotiate(err);
    }

    // If no files were uploaded, respond with an error.
    if (uploadedFiles.length === 0){
      return res.badRequest('No file was uploaded');
    }
    return res.json({"upload":"done"});

    //return res.json({"upload":"done"});

     console.log("avatarUrl",require('util').format('%s/user/avatar/%s', sails.getBaseUrl(), "nicky"));
   // // Save the "fd" and the url where the avatar for a user can be accessed
   //  User.update(req.session.me, {

   //    // Generate a unique URL where the avatar can be downloaded.
   //    avatarUrl: require('util').format('%s/user/avatar/%s', sails.getBaseUrl(), req.session.me),

   //    // Grab the first file and use it's `fd` (file descriptor)
   //    avatarFd: uploadedFiles[0].fd
   //  })
   //  .exec(function (err){
   //    if (err) return res.negotiate(err);
   //    return res.json({"upload":"done"});
   //  });
  });
},

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
		console.log(params);
		UserManager.currentUser(params,function(user){
			currentUser = user;
			
			console.log(user.$id);

			if(params.data.id){
				params.data.updatedBy = user;
					Candidate.update(params.data.id,params.data).exec(function(err,creates){
				if(err){
					res.json({ status : "fail",data: err});
				}else{
					res.json({ status : "success",data: creates});
				}
		 });
			}else{
					params.data.createdBy = user;
				Candidate.create(params.data).exec(function(err,creates){
				if(err){
					res.json({ status : "fail",data: err});
				}else{
					res.json({ status : "success",data: creates});
				}
		 });

			}
			


		});

		
		 
	}
	
	
};

