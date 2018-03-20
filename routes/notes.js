// Require dependencies 
const express = require( 'express' )
const router = express.Router()

// Require models
const db = require('../models')

// POST route to save a note
router.post('/', (req, res, next) => {
  const note = {
    id: req.body.id,
    title: req.body.title,
    body: req.body.body
  }
	// Save note into mongoDB collection
  db.Note.create(note)
    .then(dbNote => {
      return db.Collection.findOneAndUpdate(
        { _id: note.id }, 
        { $push: { note: dbNote._id } }, 
        { new: true }
      )
    })
    .then(dbCollection => {
      res.json(dbCollection)
    })
    .catch(err => {
      // If an error occurred, send it to the client
      res.json(err)
    })
    res.send('Note created')
})

// // GET route to find all saved articles in the collections
// router.get('/', (req, res, next) => {
//   // Grab articles from collections
//   db.Collection.find({})
//     .then(dbCollection => {
//       // Send collections data to be rendered
//       res.render('home', { articles: dbCollection, saved: true })
//     })
//     .catch(err => {
//       // If an error occurred, send it to the client
//       res.json(err)
//     })
// })

// // DELETE route to delete selected article from the collection
// router.delete('/', (req, res, next) => {
//   // Delete article from the collection
//   db.Collection.remove({ _id: req.body.id })
//     .then(dbCollection => {
//       res.json(dbCollection)
//     })
//     .catch(err => {
//       res.json(err)
//     })
//     console.log(`Article with id: ${ req.body.id } deleted!`)
// })

// Export router
module.exports = router