// Require dependencies
const mongoose = require('mongoose')

// Save a reference to the Schema constructor
const Schema = mongoose.Schema

// Create a new UserSchema object
const ArticleSchema = new Schema({
  // 'title' must be unique and of type String
  title: {
    type: String,
    unique: true
  },
  // 'link' must be unique and of type String
  link: {
    type: String,
    unique: true
  },
  // 'note' is an object that stores a Note id
  note: {
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }
})

// Create Article model using the schema and mongoose's model method
const Article = mongoose.model('Article', ArticleSchema)

// Export the Article model
module.exports = Article