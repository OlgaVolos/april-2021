import './App.css';
import {useEffect, useState} from "react";
import {getProduct, getProducts} from "./services/API";
import Products from "./components/Products";
import ProductsDetails from "./components/ProductsDetails";

function App() {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null)
 useEffect(() => {
     getProducts().then(value => {
         setProducts(value.data);
     })

 }, [])
    function showPhoto(id){
        getProduct(id).then(({data}) => {setProductDetails(data)
            console.log(data);
        })
    };
  return (
    <div>
        <Products items={products} showPhoto={showPhoto}/>
        <hr/>
        {productDetails && <ProductsDetails item={productDetails}/>}

    </div>
  );
}

export default App;
