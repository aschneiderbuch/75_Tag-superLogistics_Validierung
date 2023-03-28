// imports
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { body, validationResult } from 'express-validator'

// import funktioen
import { load, save } from './funktionen.js'



// Variablen für Server
const app = express()
const PORT = 9999


// Middleware
// logger  oder 'tiny'
app.use(morgan('dev'))

// Sicherheit, vite 5173
app.use(cors({ origin: 'http://localhost:5173' }))

// FrontEnd fetch Head Body auslesen und in json Parsen
app.use(express.json())


// Routen zum fetchen
//     /api/v1/lkw
// GET
app.get('/api/v1/lkw', (req, res) => {
    // laden von Daten aus dem fs
    load() 
    .then( data => res.json(data))
    
    .catch( err => {
        console.log(err)
        res.status(599).end()
    })
})


// POST     
// ! Vorsicht Daten vom -fetch Head Body- davor noch validieren und prüfen 

app.post('/api/v1/lkw',
  /* //! body hier prüfen */
 (req, res) => {

        // Daten ins fs schreiben
        const lkw = req.body  
          // ! abschicken im frontEnde mit u.a. content-type:application/json
        save(lkw)
        .then( data => res.json(data))

        .catch( err => {
            console.log(err)
            res.status(599).end()
        })
    })




// ServerPort
app.listen(PORT, () => {
    console.log("Server läuft auf Port: ", PORT)
})