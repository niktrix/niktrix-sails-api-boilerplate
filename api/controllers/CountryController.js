/**
 * CountryController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	list:function(req,res){
		 //.paginate({page:{limit:1,page:1}})
		Country.find({sort: 'name' }).exec(function(err,countries){
			 	
			if(err){
					res.json({ status : "fail",data: err});
				}else{
					res.json({ status : "success",data: countries});
				}
		});
	},
	
};

