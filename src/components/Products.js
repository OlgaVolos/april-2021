import React from 'react';
import Product from "./Product";

const Products = (props) => {
    let {items, showPhoto} = props
    return (
        <div>
            {
                items.map(product => <Product key={product.id} item={product} showPhoto={showPhoto} />)
            }

        </div>
    );
}

export default Products;
// showPhoto приймаємо ззовні, тому її прописуємо в пропсах на кожному рівні.
// це і є пропертідрилінг
