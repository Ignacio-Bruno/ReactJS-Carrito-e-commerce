import React, {useState, useEffect} from "react";
import ItemDetail from "./itemDetail";

const productsM = {id: 1, image:"https://th.bing.com/th/id/OIP.F1XbNmw3cWseUzzMl_DVIAHaHa?pid=ImgDet&rs=1", title:"Nike Running Azul"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productsM);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;