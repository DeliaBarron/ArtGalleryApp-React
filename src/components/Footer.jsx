import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='row footer mt-4'>
        <div className="footer-links">
            <Link className="logoLink" to='./About'>
                <h3 className="">about</h3>
            </Link>
            <Link className="logoLink" to='./Contact'>
                <h3 className="">contact</h3>
            </Link>
        </div>
    </footer>
  )
}

export default Footer