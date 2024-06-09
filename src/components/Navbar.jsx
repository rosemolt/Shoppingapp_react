import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ONLINE STORE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Add Book</Link>
        <Link class="nav-link" to="/SearchProduct">Search Product</Link>
        <Link class="nav-link" to="/DeleteProduct">Delete Product</Link>
        <Link class="nav-link" to="/ViewProduct">View Product</Link>
        <Link class="nav-link" to="/ViewNews">View News</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar