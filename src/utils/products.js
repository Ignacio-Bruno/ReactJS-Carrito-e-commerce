const productsH = [
    {id: 1, pictureUrl:"https://www.freshnessmag.com/.image/t_share/MTc0NDc2MjQ3MTk4NzM4MDU0/air-jordan-1-satin-red-2020-1.jpg", description:'string', title:"Jordan1", price:100, stock:'number'},
    {id: 2, pictureUrl:"https://http2.mlstatic.com/zapatillas-tenis-nike-pg-3-x-nasa-hombre-original-D_NQ_NP_803838-MCO32021324848_082019-F.jpg", description:'string', title:"Nike Pg3", price:100, stock:'number'},
    {id: 3, pictureUrl:"https://www.escapeshoes.com/wp-content/uploads/2019/06/tenis-gant-aurora-bright-brancos-1.jpg", description:'string', title:"Popa blancas", price:100, stock:'number'},
    {id: 4, pictureUrl:"https://th.bing.com/th/id/OIP.uMV57mIiEqt2KFJWPU8dTwHaHa?pid=ImgDet&rs=1", description:'string', title:"Vans Granate", price:100, stock:'number'},
    {id: 5, pictureUrl:"https://www.hobbyfuoristrada.com/wp-content/uploads/2021/05/hombre-zapatillas-primary-check-old-skool-primary-check-blackwhite-classics-vans.jpg", description:'string', title:"Vans Black/White", price:100, stock:'number'},
    {id: 6, pictureUrl:"https://th.bing.com/th/id/OIP.iw5ccB2pTDmHQc1Y5h9wfwHaHa?pid=ImgDet&rs=1", description:'string', title:"Nike Running Nightgazer", price:100, stock:'number'},
];

const productsM = [
    {id: 1, pictureUrl:"https://th.bing.com/th/id/OIP.F1XbNmw3cWseUzzMl_DVIAHaHa?pid=ImgDet&rs=1", description:'string', title:"Nike Running Azul", price:100, stock:'number'},
    {id: 2, pictureUrl:"https://th.bing.com/th/id/OIP.5O_VFgPHwaXYh4oql2fJGwAAAA?pid=ImgDet&w=320&h=320&rs=1", description:'string', title:"Reebok Flexagon", price:100, stock:'number'},
    {id: 3, pictureUrl:"https://th.bing.com/th/id/OIP.BtL19SUkbB5IkkQbDPG2CAHaId?pid=ImgDet&w=568&h=649&rs=1", description:'string', title:"Vans Old School Platform", price:100, stock:'number'},
    {id: 4, pictureUrl:"https://th.bing.com/th/id/R.88656232d72bf8aadfb28add2b8d48b9?rik=5i2jPXHvRk1pAA&pid=ImgRaw&r=0", description:'string', title:"Vans Black/CH", price:100, stock:'number'},
    {id: 5, pictureUrl:"https://th.bing.com/th/id/OIP.jfuKO3DZPAr48t7prMR5SAHaHa?pid=ImgDet&rs=1", description:'string', title:"Dc Trase Tx Wns", price:100, stock:'number'},
    {id: 6, pictureUrl:"https://th.bing.com/th/id/OIP.i7SdZZQ_MDwflA0cUT_oBwHaHa?pid=ImgDet&rs=1", description:'string', title:"Asics Padel Lima Ff", price:100, stock:'number'},
];

const productsU = [
    {id: 1, pictureUrl:"https://www.44calles.com/uploads/marketplace/productos/smile/b_5260_8fb0f9c7-d17a-47dc-8f78-3d9e33c1d70d.jpg", description:'string', title:"Dafiti Negras", price:100, stock:'number'},
    {id: 2, pictureUrl:"https://www.tdots.co/media/catalog/product/cache/1/pictureUrl/9df78eab33525d08d6e5fb8d27136e95/8/5/850e3b4a32f59355d63f0d6164f1208c.jpg", description:'string', title:"Nike classic cortez", price:100, stock:'number'},
    {id: 3, pictureUrl:"https://th.bing.com/th/id/OIP.J-KClJhuuUebSnRAB9koSwHaHa?pid=ImgDet&rs=1", description:'string', title:"Mustang parts", price:100, stock:'number'},
    {id: 4, pictureUrl:"https://th.bing.com/th/id/OIP.laqxflHC5snPmBW1pZfYKwHaId?pid=ImgDet&rs=1", description:'string', title:"All Star OX Blanco", price:100, stock:'number'},
    {id: 5, pictureUrl:"https://footonmars.com/files/resize/1600x0/files/pictureUrls/footonmars/802391e4d31f/zapatillas-converse-yths-c-t-allstar-hi-black-negras-2.jpg", description:'string', title:"Converse Chuck Taylor all star classic", price:100, stock:'number'},
    {id: 6, pictureUrl:"https://th.bing.com/th/id/OIP.VGJYw0AJEfvwtiU6aT6e5wHaHa?pid=ImgDet&rs=1", description:'string', title:" Jordan 4 Air Retro BK", price:100, stock:'number'},
];

export const getProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
          return resolve(productsH);
        }, 2000)
    })

    return promise 
};

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = productsH.find((product) => product.id === id)
        setTimeout(() => {
          return resolve(result);
        }, 2000)
    })

    return promise 
};