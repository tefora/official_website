import React from 'react'
import { loading } from '../../assets';
import {Navbar} from "../index.js";

const ProductPage = () => {
  return (
    <>
    <Navbar />
    <div className="h-[90vh] flex items-center flex-col justify-center">
      <h1 className="text-[40px] font-semibold">Working on it !</h1>
      <img src={loading} alt="" className="h-[200px]" />
    </div>
   </>
  )
}

export default ProductPage