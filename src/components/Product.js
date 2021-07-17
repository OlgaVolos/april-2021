import React from 'react';

const Product = (props) => {
    const {item, showPhoto} = props;
    return (
        <div>
            {item.id} - {item.title} - {item.price}
            <button onClick={()=> {
                showPhoto(item.id);
            }}>Show photo</button>

        </div>
    );
}

export default Product;
// showPhoto приймаємо ззовні, тому її прописуємо в пропсах на кожному рівні.
// це і є пропертідрилінг
