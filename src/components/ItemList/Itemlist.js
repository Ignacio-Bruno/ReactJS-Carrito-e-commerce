import Item from './Item';
import React from 'react';
import './itemlist.css'

const ItemList = ({productsH}) => {
    return (
        <div className='itemList'>
            {productsH.map((product) => (
                <Item key={product.id} product={product}/>
            ))},
        </div>
        
    );
}

export default ItemList;