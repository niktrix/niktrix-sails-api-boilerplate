/**
* Functions.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	list:function(req,res){
		 //.paginate({page:{limit:1,page:1}})
		Functions.find({sort: 'name' }).exec(function(err,functions){
			 	
			if(err){
					res.json({ status : "fail",data: err});
				}else{
					res.json({ status : "success",data: functions});
				}
		});
	}

  }
};

