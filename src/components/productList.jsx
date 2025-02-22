//import React from "react";
import Header from './header'
import './productList.css'
import {  useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';


function ProductList(){

  const dispatch = useDispatch();

    const productItems = [
        // Type : Fleurs
        {
          id: 1,
          name: "Rose",
          img: "https://cdn.pixabay.com/photo/2018/01/04/19/43/rose-3061486_1280.jpg",
          description: "Fleur classique aux pétales rouges, symbole de l'amour.",
          cost: 10,
          quantity: 5
        },
        {
          id: 2,
          name: "Tulipe",
          img: "https://cdn.pixabay.com/photo/2022/07/14/19/00/tuple-7321810_1280.jpg",
          description: "Fleur printanière colorée, parfaite pour égayer n'importe quel jardin.",
          cost: 8,
          quantity:5,
        },
        
        // Type : Arbres
        {
          id: 3,
          name: "Chêne",
          img: "https://cdn.pixabay.com/photo/2015/05/31/13/24/oak-791737_640.jpg",
          description: "Arbre majestueux, symbole de force et de longévité.",
          cost: 150,
          quantity: 55        },
        {
          id: 4,
          name: "Bouleau",
          img: "https://cdn.pixabay.com/photo/2015/08/19/16/40/forest-896251_640.jpg",
          description: "Arbre élégant au tronc blanc, idéal pour un environnement moderne.",
          cost: 120,
          quantity: 55        },
        
        // Type : Cactus
        {
          id: 5,
          name: "Cactus Saguaro",
          img: "https://media.istockphoto.com/id/1409188022/photo/usery-mountain-park.jpg?s=1024x1024&w=is&k=20&c=MMScNon26e1_16R2V_wOUDsB8SJjuY31grFTczVLuQw=",
          description: "Grand cactus emblématique du désert, résistant et robuste.",
          cost: 25,
          quantity: 5
        },
        {
          id: 6,
          name: "Cactus Barrel",
          img: "https://cdn.pixabay.com/photo/2016/11/18/14/00/plants-1834749_640.jpg",
          description: "Petit cactus en forme de tonneau, parfait pour une décoration intérieure.",
          cost: 20,
          quantity: 5
        }
      ];
      

    return(
        <>
        <Header/>
        <div className='products-Container'>
            {
                productItems.map((item, index)=>(
                    <div className='product-card' key={index}>
                        <h3>{item.name}</h3>
                        <img src={item.img} alt={item.name} style={{height: '40%', width: '95%'}} />
                        <span>${item.cost}</span>
                        <p>{item.description}</p>
                        <button type="submit" className='btn-addToCard' onClick={() => dispatch(addToCart(item))}>Add to cart</button>
                        

                    </div>
                ))
            }
        </div>
        </>
    )
}
export default ProductList;