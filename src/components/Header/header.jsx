import React from 'react';
import './header.scss'
import { FaHeart, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();

    const navTo = (t)=> {
        navigate(t)
    }

    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <h1>Cross</h1>
                    <div>
                        <FaHome onClick={() => navTo("/")} />
                        <FaHeart onClick={() => navTo("/favorite")} />
                        <FaLocationDot onClick={() => navTo("/contacts")}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;