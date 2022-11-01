import './ItemCount.css';
import React,{useState, useEffect} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
   const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const handleClick = () => onAdd(count);

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));

    }, [initial])

    return (
        <div className='counter'>
            <div>
                <button className='buttons' disabled={count <= 1} onClick={decrease}>-</button>
                <span>{count}</span>
                <button className='buttons' disabled={count >= stock} onClick={increase}>+</button>
            </div>
            <div>
                <button className='cart' disabled={stock <= 0} onClick={handleClick}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;