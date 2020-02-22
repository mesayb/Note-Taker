const path = require('path');

function htmlRoutes(app){

    app.get('/', (req, res) =>{
        return res.sendFile(path.join(__dirname, '../../public/index.html'))
   })
   
    app.get('/notes', (req, res) =>{
          res.sendFile(path.join(__dirname, '../../public/notes.html'))
    })
}

module.exports = htmlRoutes;