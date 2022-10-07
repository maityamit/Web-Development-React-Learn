import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/productlist";
import React, { useState } from 'react';
import Footer from "./components/footer"

function App() {

  const productList = [
    {
      price: 9999,
      name: "iPhone 10",
      quantity: 2,
    },
    {
      price: 9900,
      name: "Redmi 10",
      quantity: 2,
    }
  ]


  let [count, setCount] = useState(productList);

  let [totalAmount, setTotalAmount] = useState(0);


  let incrementQuantity = (index) =>{

    let newProductList = [...productList]
    newProductList[index].quantity++
    setCount(newProductList);


  }

  

  return (
    <>
      <Navbar/>

     <main className="container mt-5">
     <ProductList product={count} incrementQuantity={incrementQuantity}/>
     </main>
     

     <Footer/>

    </>
  );
}

export default App;
