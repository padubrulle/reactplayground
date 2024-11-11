import { useState } from "react"

function App() {

  const [count, setCount] = useState(0)

  const [person, setPerson] = useState({
    firstname: "john",
    lastname: "doe",
    age: 18
  })

  console.log('render')

  const increment = () => {
    // setCount(count+1)
    setCount((count) => count+1) // => permet de garder la valeur qui a été modifée
  }

  const incrementAge = () => {

    setPerson({...person, age: person.age +1})
  }

  const reset = () => {
    setCount(0)
  }

  const resetAge = () => {
    setPerson({...person, age: 18})
  }

  return <>
    <p>Compteur : { count }</p>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>reset</button>

    <p>Age de {person.firstname} : { person.age } ans</p>
    <button onClick={incrementAge}>Gagner une année</button>
    <button onClick={resetAge}>reset</button>
  </>
}

export default App
