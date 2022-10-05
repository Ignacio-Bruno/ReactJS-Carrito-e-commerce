import './ItemListContainer.css'
import Container from 'react-bootstrap/Container';
import ItemList from './Itemlist';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/products';

const ItemListContainer = ({greeting}) => {
    const {categoryId} = useParams();
    const [productsH, setProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId)
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        } else {
            getAllProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
        } 
    }, [categoryId])
    return (
        <Container>
            <p className="prods">PRODUCTOS</p>
            <h3 className="greeting">{greeting}</h3>
            <ItemList productsH={productsH}/>
        </Container>
    );
}

export default ItemListContainer;