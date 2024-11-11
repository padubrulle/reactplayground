import { useState } from "react"



function App() {
  // return "Bonjour les gens"

  const [isTermAccepted, setChecked] = useState(true)
    

  return <form>
    <CGUCheckbox checked={isTermAccepted} onCheck={setChecked}/>
    <button disabled={!isTermAccepted}>Envoyer</button>
  </form>
}


function CGUCheckbox ({onCheck, ...props}){
  return <div>
    <label>
      <input 
        type="checkbox" 
        onChange={(e) => onCheck(e.target.checked)} 
        {...props}/>
      Accepter les CGU
    </label>
  </div>
}

export default App
