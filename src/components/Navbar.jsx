import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-danger" >
      <div class="container-fluid">
      <a class="navbar-brand" href="#">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHlOiIq4nvh043FB_-SHVriqkgKmjvEA0fWA&s" alt="Bootstrap" width="55" height="55" />
                            </a>
    
        <a class="navbar-brand" href="#">TODO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
       
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Search">Search</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/delete">Delete</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/viewall">Viewall</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar