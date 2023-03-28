// import
import fs from 'fs';



// Variable
// DB Datenbank zum wegspeichern
const DB_PATH = './DB.json'

export const load = () => {
    // Promise damit fetch versprechen passt
    return new Promise( (resolve, reject) => {

        // Daten aus DB einlesen
        fs.readFile(DB_PATH, 'utf-8', (err, data) => {
            if (err) { reject (err)}
            else {
                // ! JSON Parsen und umwandeln
                resolve(JSON.parse(data))
            }
        })
    })
}