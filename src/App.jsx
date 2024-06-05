import React from 'react'
import "./App.css"
import Product from './components/product/Product'
import Create from './components/create/Create'


const App = () => {
  return (
    <div>
      <h2>RTK quary</h2>
      <Create/>
      <Product/>
    </div>
  )
}

export default App