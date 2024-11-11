import { Fragment } from "react"
import Title from './Title.jsx'

const title = "Bonjour les gens"
const style = {
  color: "red",
  backgroundColor: 'blue'
}
let showTitle = true
const todos = [
  'Apprendre react',
  'apprendre le JSX',
  'Apprendre à créer des composants'
]

let hide = null

function App() {

  const handleClick = (e) => {
    console.log(e)
    alert('I clicked on title')
  }

  const displayTitle = () => {
    showTitle = !showTitle;
    showTitle ? hide = "hidden" : hide = null
    console.log(hide)
  }
  return <Fragment>
      {
        showTitle ? 
        <Title color='red' id="monid" class="MaClasscool">Mon enfant</Title> : 
        <p>Titre non dispo</p>
      }
      <button onClick={displayTitle}>show title</button>
      <input type="text"/>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, reiciendis aliquid ut accusantium quaerat maxime doloremque in officia aspernatur libero quas sed quisquam ipsam inventore iure distinctio totam. Reiciendis, optio.</p>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>
    </Fragment>
}



export default App
