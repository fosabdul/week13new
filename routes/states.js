let express = require('express')
let States = require('../models').States 

let router = express.Router()

//this will get all the states or fletching

router.get('/states', function(req, res, next){
    States.findAll({ order: ['name']}).then( states => { // to find all the states by array
        return res.json(states)
    })
    .catch( err => next(err) ) // pass any error handler that is encounted
})

router.get('/state/:name', function(req, res, next){ // get all info about one state
    let stateName = req.params.name
    States.findOne({ where: { name: stateName } })
        .then(state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send('State not found')
            }
        })
})

router.patch('/state/:name', function(req, res, next) { // / '/state/:name'= it will match any states chosen
    let stateName = req.params.name  // req.params.name = any part of the url we collecting 
    let stateVisited = req.body.visited  //json sent in the request body

    States.update({ visited: stateVisited }, { where: { name: stateName }}) // the model #inthe database find the state with state:name
        .then( rowsUpdated => { //
            if (rowsUpdated) {
                // state in database and has been updated 
                return res.send('ok') // if the state in the dtbase send OK
            } else {
                return res.status(404).send('State not found') // if the state not found sent 404
            }
        })
        .catch( err => next(err) ) // if some type or user error or something happen. pass generic error handler
})
// anything that import the states.js file will be able to access
module.exports = router


