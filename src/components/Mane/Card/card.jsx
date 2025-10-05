import React from 'react';
import './card.scss'
import {FaHeart} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {addToCart, clearCart, removeFromCart} from "../../../features/cartSlice.js";
import { FaRegHeart } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";



const Card = ({product}) => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const addFavorite = () => {
        dispatch(addToCart(product));
    }

    const removeFavorite = () => {
        dispatch(removeFromCart(product.id));
    }

    const inFav = items.some(a => a.id === product.id);

    return (
        <div className="card" onClick={() => navigate(`/details/${product.id}`)}>
            <div className="card--img">
                <img src={product.image[0]} alt=""/>
            </div>
            <div className='card--text'>
                <h3>{product.brend}</h3>
                <p>{product.model}</p>
                <div style={{color: inFav ? 'red' : ''}}>
                    <h4>{product.price.price} <span>{product.price.currency}</span></h4>
                    {inFav ? (
                        <FaHeart
                            onClick={(e) => {
                                e.stopPropagation(); // блокируем всплытие на карточку
                                removeFavorite();
                            }}
                        />
                    ) : (
                        <FaRegHeart
                            onClick={(e) => {
                                e.stopPropagation();
                                addFavorite();
                            }}
                        />
                    )}
                </div>
            </div>
        </div>

    );
};

export default Card;