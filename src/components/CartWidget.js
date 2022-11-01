import { useContext } from "react";
import { Badge } from "react-bootstrap";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from "react-router-dom";
import CartContext from "./contexts/CartContext";

const CartWidget= () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to="/cart">
            <AiOutlineShoppingCart/>
            {totalQuantity > 0 &&(
            <Badge pill bg="dark">{totalQuantity}</Badge>)}
        </Link>
    );
}

export default CartWidget;