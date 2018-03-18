// Require dependencies
const mongoose = require('mongoose')

// Save a reference to the Schema constructor
const Schema = mongoose.Schema

// Create a new UserSchema object
const ArticleSchema = new Schema({
  // 'title' is required and of type String
  title: {
    type: String,
    required: true
  },
  // 'link' is required and of type String
  link: {
    type: String,
    required: true
  },
  // 'note' is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }
})

// Create Article model using the schema and mongoose's model method
const Article = mongoose.model('Article', ArticleSchema)

// Export the Article model
module.exports = Article