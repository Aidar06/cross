import React from 'react';
import './favorite.scss'
import {useSelector} from "react-redux";
import Card from "../Mane/Card/card.jsx";

const Favorite = () => {
    const { items } = useSelector((state) => state.cart);

    return (
        <section id="favorite">
            <div className="container">
                <h2>Избранные</h2>
                {
                    items.length === 0?
                        <div className='favoriteD'><p>Ничего не найдено</p></div>:
                        <div className="favorite">
                            {
                                items.map((product, i) => (
                                    <Card key={i} product={product} />
                                ))
                            }
                        </div>
                }
            </div>
        </section>
    );
};

export default Favorite;