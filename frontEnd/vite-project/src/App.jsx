
import './App.css'
import { InputForm } from './assets/components/InputForm.jsx'
import { useState, useEffect } from 'react' 
import { OutputLkwListe } from './assets/components/OutputLkwListe'
import { v4 as uuidv4 } from 'uuid'



function App() {
  const [getNewLkwObject, setNewLkwObject] = useState()

  // useEffect um fetch GET
useEffect(() => {
  fetch("http://localhost:9997/api/v1/lkw", {
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then( res => res.json())
  .then ( data => setNewLkwObject(data))
},[setNewLkwObject])

if(!getNewLkwObject) return

  return (
    <div className="App">
    
<InputForm setNewLkwObject_Austausch={ setNewLkwObject }></InputForm>

{/* //!    ? = wenn nichts da ist wartet er macht keinen Fehler */}
 {getNewLkwObject?.map((lkw,index) => {
  return (
    <OutputLkwListe key={uuidv4()} post_Austausch={lkw}></OutputLkwListe>
  )
})}
    </div>
  )
}

export default App
