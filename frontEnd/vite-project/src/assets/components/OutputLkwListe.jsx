

// rafc
import React from 'react'

export const OutputLkwListe = ( { post_Austausch } ) => {
  return (
    <>
    <div>OutputLkwListe</div>
    <h2 style={{color:`red`}} > Hersteller: { post_Austausch.getHersteller } </h2>
    <p> Kilometer: { post_Austausch.getKilometer } in km</p>
    <p> Kennzeichen: { post_Austausch.getKennzeichen } </p>
    <p> Last: { post_Austausch.getLast } in t</p>
    </>
  )
}
