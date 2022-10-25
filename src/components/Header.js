import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>

    <Link to="/">Home</Link>
    <Link to="/add">Add a Book</Link>
    </div>
  )
}

export default Header