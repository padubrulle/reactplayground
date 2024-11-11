import { Checkbox } from "./components/forms/Checkbox"
import { Input } from "./components/forms/input"
import { Range } from "./components/forms/Range"
import { ProductCategoryRow } from "./components/forms/products/ProductCategoryRow"
import { ProductRow } from "./components/forms/products/ProductRows"
import { useState } from "react"

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},  
  {category: "Meat", price: "$7", stocked: true, name: "Beef"},  
  {category: "Meat", price: "$6", stocked: true, name: "Chicken"},  
  {category: "Meat", price: "$5", stocked: true, name: "Pork"},  
  {category: "Pisces", price: "$9", stocked: true, name: "Salmon"},  
  {category: "Pisces", price: "$8", stocked: false, name: "Oyster"},  
  {category: "Pisces", price: "$9", stocked: true, name: "Mermaid"}  
]
function App() {

  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState(0)

  const visibleProducts = PRODUCTS.filter(product => {
    if(showStockedOnly && !product.stocked){
      return false
    }

    if(searchTerm && !product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
      return false
    }

    if(priceRange && parseInt(product.price[1]) <= priceRange){
      return false
    }
    return true
  })

  return <div className="container my-3">
    <SearchBar 
      showStockedOnly={showStockedOnly}
      onStockedOnlyChanged={setShowStockedOnly}
      searchTerm={searchTerm}
      onSearchTermChanged={setSearchTerm} 
      priceRange={priceRange}
      onPriceRangeChanged={setPriceRange}   
    />
    <ProductTable products={visibleProducts} />
  </div>
}


function SearchBar({showStockedOnly, onStockedOnlyChanged, searchTerm, onSearchTermChanged, priceRange, onPriceRangeChanged}){

  return <div>
    <div className="mb-3">
      <Input 
        value={searchTerm} 
        onChange={onSearchTermChanged} 
        placeholder="Rechercher..." />
      <Range 
        value={priceRange}
        min={0} 
        max={20}
        onChange={onPriceRangeChanged} 
        label="Afficher les articles au dessus de "
      />
      <Checkbox 
        id="stocked" 
        checked={showStockedOnly} 
        onChange={onStockedOnlyChanged} 
        label="N'afficher que les produits en stock" />
    </div>
  </div>
}

function ProductTable({products}){
const rows = []
let lastCategory = null

for(let product of products){
  if(product.category !== lastCategory){
    rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
  }
  lastCategory = product.category
  rows.push(<ProductRow product={product} key={product.name} />)
}
  return <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

// function InputSearchBar({...props}){
//   const divStyle = {
//     display: 'flex',
//     width: '100%'
//   }

//   const inputStyle = {
//     justifyContent: 'flex-start'
//   }
//   return <div style={divStyle}>
//     <input style={inputStyle} type="text" placeholder="Recherche" />
//   </div>
// }

// function CheckboxSearchBar(){
//   const divStyle = {
//     display: 'flex',
//     width: '100%'
//   }

//   const inputStyle = {
//     display: 'flex',
//     justifyContent: 'flex-start'
//   }
//   return <div style={divStyle}>
//     <label style={inputStyle}>
//       <input  type="checkbox" />
//       N'afficher que les produits en stock
//     </label>
//   </div>
// }



// function ProductTable(){
  
//   return <>
//     <ProductCategory/>
//     <ProductRow />
//   </>
// }

// function ProductCategory(){
//   const categories = [...new Set(PRODUCTS.map((p) => p.category))]
//   console.log(categories)
//   return <div>
//     <h1>{categories}</h1>
//   </div>
// }

// function ProductRow(){
//   const product = PRODUCTS.filter((p) => {return p.category === 'Fruits'})
//   return <div>
//       <div>
//         {product[0].name}
//       </div>
//       <div>
//         {product[0].price}
//       </div>
//     </div>
// }

export default App
