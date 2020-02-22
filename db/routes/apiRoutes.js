let dbjson = require('../../db.json');
const fs = require('fs');

function apiRoutes(app) {
    //GET Notes API 
    app.get('/api/notes', (req, res) => {
        res.json(dbjson)
    });
    //POST Note API 
    app.post('/api/notes', (req, res) => {
        const data = req.body;
        //GENERATE a new ID every time a new note is added
        let newId;
        if (dbjson.length === 0) {
            newId = 1;
        } else {
            newId = parseInt(dbjson[dbjson.length - 1].id) + 1;
        }

        data.id = newId;
        //add the new note to our data object
        dbjson.push(data);
        writeJSON(dbjson);
        res.send(`created a new note with ID = ${newId}`);
    });

    //DELETE note API
    app.delete('/api/notes/:id', (req, res) => {
        //filter the Note to be deleted
        dbjson = dbjson.filter(data => {
            return data.id.toString() !== req.params.id.toString();
        });
        //update Notes object after delete
        writeJSON(dbjson);
        res.json(dbjson);
    });
}




module.exports = apiRoutes;




function writeJSON(jsonData) {
    fs.writeFile('db.json', JSON.stringify(jsonData), (err) => {
        if (err) {
            console.log("Error WRITING JSON file");
        }
    })
}