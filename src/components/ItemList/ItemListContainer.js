import './ItemListContainer.css'
import Container from 'react-bootstrap/Container';
import ItemList from './Itemlist';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../utils/products';

const ItemListContainer = ({greeting}) => {
    const {categoryName} = useParams();
    const [productsH, setProducts] = useState([]);

    useEffect(() => {
        console.log(categoryName);
    },[categoryName])

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
    }, [])
    return (
        <Container>
            <p className="prods">PRODUCTOS</p>
            <h3 className="greeting">{greeting}</h3>
            <ItemList productsH={productsH}/>
        </Container>
    );
}

export default ItemListContainer;