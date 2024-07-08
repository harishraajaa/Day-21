import React, { useState }from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Product from './Components/Product'
import Footer from './Components/Footer'

function App() {

  let [cartValue,setCart]=useState(0)

  let productData=[
    {
      pname:"Apple iphone 13 (128 GB)",
      pprice:"59,999",
      pimage:"https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX679_.jpg"
    },
    {
      pname:"Apple ipad Air (5th Gen)",
      pprice:"39,999",
      pimage:"https://m.media-amazon.com/images/I/61XZQXFQeVL._SX679_.jpg"
    },
    {
      pname:"Apple MacBook Air Laptop",
      pprice:"119,999",
      pimage:"https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
    },
    {
      pname:"Apple Watch SE (2nd Gen)",
      pprice:"29,999",
      pimage:"https://m.media-amazon.com/images/I/71lG7br7k1L._SX679_.jpg"
    },
    {
      pname:"Apple AirPods Pro (2nd Gen)",
      pprice:"24,999",
      pimage:"https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg"
    },
    {
      pname:"Apple AirPods (2nd Gen)",
      pprice:"19,999",
      pimage:"https://m.media-amazon.com/images/I/7120GgUKj3L._SX679_.jpg"
    },
    {
      pname:"Apple iPhone 15 Pro (128 GB)",
      pprice:"109,999",
      pimage:"https://m.media-amazon.com/images/I/81qlME2wWmL._SX679_.jpg"
    },
    {
      pname:"Apple 20W USB-C Power Adapter",
      pprice:"1999",
      pimage:"https://m.media-amazon.com/images/I/61vtLhO6fDL._SY879_.jpg"
    }
  ]

  return <>

        <Navbar data={cartValue}/>
        <Header/>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    productData.map((e,i)=>{
                      return <Product prod={e} data={cartValue} setFn={setCart} key={i}/>
                    })
                  }
                  
                </div>
              </div>
        </section>
        <Footer/>
  </>
}

export default App
