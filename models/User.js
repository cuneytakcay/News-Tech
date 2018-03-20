// Require dependencies
const mongoose = require('mongoose')

// Save a reference to the Schema constructor
const Schema = mongoose.Schema

// Create a new UserSchema object
const UserSchema = new Schema({
  // `name` must be unique and of type String
  name: {
    type: String,
    unique: true
  },
  // `articles` is an array that stores ObjectIds
  articles: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Article model
      ref: 'Article'
    }
  ],
  // `notes` is an array that stores ObjectIds
  notes: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'Note'
    }
  ]
})

// Create User model using the schema and mongoose's model method
const User = mongoose.model('User', UserSchema)

// Export the User model
module.exports = User