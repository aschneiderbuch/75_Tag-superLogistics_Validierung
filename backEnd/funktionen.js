// import
import fs from 'fs';



// Variable
// DB Datenbank zum wegspeichern
const DB_PATH = './db.json'

export const load = () => {
    // Promise damit fetch versprechen passt
    return new Promise((resolve, reject) => {

        // Daten aus DB einlesen
        fs.readFile(DB_PATH, 'utf-8', (err, data) => {
            if (err) { reject(err) }
            else {
                // ! JSON Parsen und umwandeln
                resolve(JSON.parse(data))
            }
        })
    })
}

export const save = (item) => {
    // Promise damit fetch versprechen passt
    return new Promise((resolve, reject) => {

        // Daten laden
        load()
            .then(data => {
                data.push(item)

                // ! JSON umwandeln und hinzufügen
                // null , 2   db.json  Formatieren, so das es Zeilenumbrüche gibt
                fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), (err) => {
                    if (err) reject(err)
                    else {
                        resolve(data)
                    }
                })
            })
            .catch( err => reject(err))
    })
}