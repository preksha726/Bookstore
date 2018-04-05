var mongoose = require('mongoose');

//Genre Schema
var genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get genres

module.exports.getGenres = function (callback, limit) {
	// body...
	Genre.find(callback).limit(limit);

}