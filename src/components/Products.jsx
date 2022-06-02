import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
       const fetchProducts=async()=>{
           let r=await fetch("  http://localhost:8080/products");
           let d=await r.json();
           setProducts(d)
          

       }
       fetchProducts()

    },[products])

    
  return (
    
    <div>
      Products:{" "}
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
        <Outlet/>
         <div>{products.map((p)=>(
           <div key={p.id}>
             {/* <p>Product:{p.name}</p>
             <p>Price:{p.price}</p> */}
          <p>Product Name:</p> <Link to={`/products/${p.id}`}>{p.name}</Link> 
           
          
           </div>
           
           
       
           ))}

         
      </div>
      </div>
    </div>
  )
}

export default Products