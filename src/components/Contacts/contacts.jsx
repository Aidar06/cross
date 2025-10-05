import React from 'react';
import './contacts.scss'
import { FaWhatsapp, FaPhoneAlt, FaInstagram , FaTelegramPlane   } from "react-icons/fa";


const Contacts = () => {
    return (
        <section id="contacts">
            <div className="container">
                <div className="contacts">
                    <div className="contacts--info">
                        <div>
                            <FaWhatsapp />
                            <a href="#">0700700700</a>
                        </div>
                        <div>
                            <FaPhoneAlt  />
                            <a href="#">0700700700</a>
                        </div>
                        <div>
                            <FaInstagram   />
                            <a href="#">instagram_ijs</a>
                        </div>
                        <div>
                            <FaTelegramPlane    />
                            <a href="#">@telegfm</a>
                        </div>
                    </div>
                    <div className="contacts--map">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61915712.18271193!2d87.22709473957904!3d-18.707243640182398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2z0JDQstGB0YLRgNCw0LvQuNGP!5e0!3m2!1sru!2skg!4v1758650281534!5m2!1sru!2skg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;