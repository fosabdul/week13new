let express = require('express') //

let states_api = require('./routes/states') //
let path = require('path')

let app = express()  // 
// web server app
app.use(express.static(path.join(__dirname, 'client', 'dist')))
// app.use(express.static(VueAppPath))

app.use(express.json())   // enable parsing JSON sent with requests

app.use('/api', states_api) //all of the root api slash 

app.use(function(req, res, next) {
    res.status(404).send('Not found') // error that's not to API or specific handler we're created
})

app.use(function(err, req, res, next) { //
    console.error(err.stack)   // log for developer to see
    res.status(500).send('Server error') // respond any 
})

let server = app.listen(process.env.PORT || 3000, function() { // start server runing 
    console.log('App running on port', server.address().port)
})
