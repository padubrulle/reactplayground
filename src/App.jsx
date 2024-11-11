import { useState } from "react"
function App() {


// const [firstname, setFirstname] = useState('John doe')
// const handleChange = (e) => {
//   setFirstname(e.target.value)
// }
// const reset = () => {
//   setFirstname('')
// }

const [checked, setChecked] = useState(true)

const handleCheckbox = () => {
  setChecked(!checked)
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(new FormData(e.target))
}
  return <form onSubmit={handleSubmit}>
    {/* <input type="text" name="firstname" value={firstname} onChange={handleChange}/> */}
    {/* {firstname}
    <button onClick={reset} type='button'>Reset</button> */}
    <input type="text" name="firstname" defaultValue="Johnny cash"/>
    <input type="checkbox" checked={checked} onChange={handleCheckbox}/>
    <button disabled={!checked}>Envoyer</button>
  </form>
}

export default App
