import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <Link class="navbar-brand text-light" href="/">IMDb</Link>
    <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto pt-2 pd-2 ps-2 pe-3">
        <li class="nav-item active">
            <Link class="nav-link text-light" href="/">Home</Link>
        </li>
        <li class="nav-item active">
            <Link class="nav-link text-light" href="/pages/contact">Contact</Link>
        </li>
        <li class="nav-item active">
            <Link class="nav-link text-light" href="/pages/about">About</Link>
        </li>
        <li class="nav-item active">
            <Link class="nav-link text-light" href="/pages/signin">Sign In</Link>
        </li>
        </ul>
    </div>
    </nav> 
    </div>
  )
}
