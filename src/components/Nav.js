import React from 'react'
import Filterby from './Filterby'
import Sortby from './Sortby'
import  './Nav.css'

const Nav = () => {
  return (
    <div>
      <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <Filterby/>
        <Sortby/>
      </div>
      </nav>
    </div>
  )
}

export default Nav