import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark  text-white text-center p-3'>
        <h4>All Right Reerved &copy; Komal Kalsoom</h4>
        <p className='text-center mt-3 text-light'>
       <Link className=' text-white' to="/about">About</Link> &nbsp;&nbsp; |  &nbsp;&nbsp;
       <Link className=' text-white' to="/contact">Contact</Link>
        </p>
    </div>
  )
}

export default Footer