// Get all of our friend data
var data = require('../data.json');
//res.render('data');

exports.view = function(req, res){
	//var data = req.params.data; 

	console.log(data);
	//res.render(data);
	res.render('index', data);
};