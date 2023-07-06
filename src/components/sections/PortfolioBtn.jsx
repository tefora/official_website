import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioBtn = () => {
  return (
    <div className='text-center'>
        <Link to="/portfolio" className=' border-2 border-white rounded-[90px] text-white text-[18px] m-auto px-16 font-medium py-4 hover:bg-white hover:text-dark transition-all duration-300 ease-in-out' >SEE PORTFOLIO</Link>
    </div>
  )
}

export default PortfolioBtn