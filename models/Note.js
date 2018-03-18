// Require dependencies
const mongoose = require('mongoose')

// Save a reference to the Schema constructor
const Schema = mongoose.Schema

const NoteSchema = new Schema({
	// 'title' is of type String
	title: String,
	// 'body' is of type String
	body: String
})

// Create Note model using the schema and mongoose's model method
const Note = mongoose.model('Note', NoteSchema)

// Export the Note model
module.exports = Note