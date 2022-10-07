import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"

const TopBar =()=> {
  return (
        <section className='sections'>
            <div className='topleft'>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-square-pinterest"></i>
            </div>
            <div>
              <Link to={"/"} className='link'><span>Home</span></Link>
              <Link className='link'><span>Categories</span></Link>
              <Link className='link'><span>About</span></Link>
            </div>
            <div className='topright'>
            <input type="search" />
            <i className="fa-solid fa-magnifying-glass"></i>
              
            </div>
        </section>
  )
}

export default TopBar;