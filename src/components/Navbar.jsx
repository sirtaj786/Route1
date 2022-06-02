import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  const handleOnClick=(id)=>{
    if(id===1){
      navigate("/products/1")
    }else{
      navigate("/products/2")
    }
  }
  return (
    <div>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <button onClick={()=>handleOnClick(1)}>Go To product1</button>
        <button onClick={()=>handleOnClick(3)}>Go To product2</button>
    </div>
  )
}

export default  Navbar;