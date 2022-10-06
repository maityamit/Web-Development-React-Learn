import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/productlist";

function App() {

  const product = [
    {
      price: 9999,
      name: "iPhone 10",
      quantity: 1
    },
    {
      price: 9900,
      name: "Redmi 10",
      quantity: 2
    }
  ]
  return (
    <>
      <Navbar/>

     <main className="container mt-5">
     <ProductList product={product}/>
     </main>
     

     {/* <Footer/> */}

    </>
  );
}

export default App;
