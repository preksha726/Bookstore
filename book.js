var mongoose = require('mongoose');

//Book Schema
var bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
    },
    description:{
    	type: String,
    },
    author:{
		type: String,
		required: true
    },
    
     publisher:{
		type: String,
		
    },
    
     image_url:{
		type: String,
		
    },
     buy_url:{
		type: String,
		
    },

	create_date:{
		type: Date,
		default: Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get books

module.exports.getBooks = function (callback, limit) {
	// body...
	Book.find(callback).limit(limit);

}