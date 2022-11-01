import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import Item from "../ItemList/Item";
import ItemCount from "../ItemList/ItemCount";
import './itemDetail.css'

const ItemDetail = ({product}) => {
    const {addItem} = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);

    const handleAdd = (value)  => {
        setCount(value);
        setShowItemCount(false);
        addItem(product, value);
    }

    return (
        <div className="itemdetailcontainer">
            <Item product={product}/>
            {showItemCount && (<ItemCount 
                    initial={1} 
                    stock={10} 
                    onAdd={handleAdd}
                />)}
            {!showItemCount && (
                    <Link style={{textDecoration:'none'}} to='/cart'>
                        <button className="but__compra">
                             Ir al Carrito
                        </button>
                    </Link>
                )}
        </div>
    );
}



export default  ItemDetail;