import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductById} from "../../features/productsSlice.js";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight  } from "react-icons/md";
import './details.scss'

const Details = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { item, ILoading, IError } = useSelector((state) => state.products);
    const [count, setCount] = useState(0);

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);

    const countPlus = ()=> {
        if (count < item.image.length - 1) {
            setCount(count+1);
        }
    }

    const countMunus = ()=> {
        if (count > 0) {
            setCount(count-1);
        }
    }

    return (
        <section id="details">
            <div className="container">
                {
                    ILoading?
                        <div className='detailsB'><p>Загрузка...</p></div>:
                        IError?
                            <div className='detailsB'><p>Ошибkа</p></div>:
                            <div className="details">
                                <div className='details--info'>
                                    <h2>{item.brend}</h2>
                                    <h3>{item.model}</h3>
                                    <div className='details--info__size'>
                                        <p>Доступные рзмеры:</p>
                                        <div  className='details--info__size--viwe'>
                                            {
                                                item.size.map((s,i) => (
                                                    <div key={i}>{s}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <h4>Цена: <span>{item.price.price}{item.price.currency}</span></h4>
                                </div>
                                <div className="details--img">
                                    <img src={item.image[count]} alt=""/>
                                    <div  className="details--img__arr">
                                        <div onClick={countMunus}><MdOutlineKeyboardArrowLeft /></div>
                                        <div onClick={countPlus}><MdOutlineKeyboardArrowRight  /></div>

                                    </div>
                                </div>
                            </div>
                }
            </div>
        </section>
    );
};

export default Details;