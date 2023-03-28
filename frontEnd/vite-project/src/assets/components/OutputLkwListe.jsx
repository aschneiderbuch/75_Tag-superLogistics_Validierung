

// rafc
import React from 'react'

export const OutputLkwListe = ( { post_Austausch } ) => {
  return (
    <>
    <div>OutputLkwListe</div>
    <p> { post_Austausch.getHersteller } </p>
    <p> { post_Austausch.getKilometer } </p>
    <p> { post_Austausch.getKennzeichen } </p>
    <p> { post_Austausch.getLast } </p>
    </>
  )
}
