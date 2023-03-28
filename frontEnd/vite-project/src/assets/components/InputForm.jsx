// import 
import { useState } from 'react'


//rafc
import React from 'react'

export const InputForm = ( { setNewLkwObject_Austausch } ) => {
    const [getHersteller, setHersteller] = useState()
    const [getKilometer, setKilometer] = useState()
    const [getKennzeichen, setKennzeichen] = useState()
    const [getLast, setLast] = useState()



    const handleSubmitButton = (e) => {
        e.preventDefault() // damit nicht nach jedem drücken alle Inputs geleert werden

        // Objekt mit den zum verschicken
        const newLkwObject = {
            getHersteller,
            getKilometer,
            getKennzeichen,
            getLast
        }


        // fetch zum Posten an Server mit Daten 
        // ! diese müssen dann auch validiert werden
        fetch("http://localhost:9997/api/v1/lkw", {
            // Objekt für Express.json Parser vorbereiten für Head Body
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLkwObject)   // hier die Daten rein, damit sie zu Server kommen
        })
        .then( res => res.json())
        .then( data => {
            // !!! jetzt Daten noch nach vorne zur React App.jsx schieben
                setNewLkwObject_Austausch(data)
                console.log(data)
        })
    }

    
    return (
        <form>
            <div>InputForm</div>
            <input type="text" placeholder='Hersteller(keineNr)' required onChange={(e) => setHersteller(e.target.value)} ></input>
            <input type="number" placeholder="Kilometer" onChange={(e) => setKilometer(e.target.value)}></input>
            <input type="text" placeholder="Kennzeichen" onChange={(e) => setKennzeichen(e.target.value)}></input>
            <input type="number" placeholder='Last in t' onChange={(e) => setLast(e.target.value)}></input>

            <button onClick={handleSubmitButton} >Absenden</button>
        </form>
    )
}
