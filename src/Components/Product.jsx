import React, { useState } from 'react'
import Star from './Star'

function Product({prod,data,setFn}) {

    let [toggle,setToggle]=useState(true)
    let val=""
    // console.log("Call Check")


  return <>
                      <div className="col mb-5">
                          <div className="card h-100">
                              {/* <!-- Product image--> */}
                              <img className="card-img-top" src={prod.pimage} alt="..." />
                              {/* <!-- Product details--> */}
                              <div className="card-body p-4">
                                  <div className="text-center">
                                      {/* <!-- Product name--> */}
                                      <h5 className="fw-bolder">{prod.pname}</h5>
                                      {/* <!-- Product price--> */}
                                      ₹{prod.pprice}
                                  </div>
                                    <div>
                                    <Star prod={prod.pname}/>
                                    </div>
                                </div>
                              {/* <!-- Product actions--> */}
                              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                  {
                                    toggle?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                        setFn(data+1)
                                        setToggle(!toggle)
                                    }}>Add to Cart</button></div>:
                                    <div className="text-center"><button className="btn btn-dark mt-auto" onClick={()=>{
                                        setFn(data-1)
                                        setToggle(!toggle)
                                    }}>Remove from Cart</button></div>

                                  }
                              </div>
                          </div>
                  </div>
  </>
}

export default Product
