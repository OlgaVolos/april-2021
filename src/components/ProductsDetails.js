import React from 'react';

const ProductsDetails = ({item}) => {
    return (
        <div>
            <img src={item.image} alt={item.title}/>
        </div>
    );
}

export default ProductsDetails;
