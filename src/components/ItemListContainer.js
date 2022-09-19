import './ItemListContainer.css'
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({greeting}) => {
    return (
        <Container>
            <p className="prods">PRODUCTOS</p>
            <h3 className="greeting">{greeting}</h3>
        </Container>
    );
}

export default ItemListContainer;