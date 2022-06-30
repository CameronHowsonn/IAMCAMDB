import React from "react";
import { FaHome, FaHotel, FaRegCompass, FaStopwatch, FaRegUser, FaRegHeart, FaRecordVinyl, FaUserCog, FaDoorOpen } from "react-icons/fa";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


const Sidebar = () => {
    return (
        <section className="sidebar">

            <div className="sidebar__header">
                <div className="sidebar__header__logo">
                    <h2>
                        Exxmon
                    </h2>
                </div>
            </div>
            <nav className="sidebar__nav">
                <ul className="sidebar__nav__list sidebar__nav__list-top">
                    <h4>Menu</h4>
                    <li className="sidebar__nav__list__item">
                        <FaHome />Home
                    </li>
                    <li className="sidebar__nav__list__item">
                        <FaHotel />Community
                    </li>
                    <li className="sidebar__nav__list__item">
                        <FaRegCompass />Discovery
                    </li>
                    <li className="sidebar__nav__list__item">
                        <FaStopwatch /> Coming Soon
                    </li>
                </ul>
                <ul className="sidebar__nav__list sidebar__nav__list-middle">
                    <h4>Social</h4>
                    <li className="sidebar__nav__list__item">
                        <FaRegUser />Home
                    </li>
                    <li className="sidebar__nav__list__item">
                        <FaRegUser />Community
                    </li>
                    <li className="sidebar__nav__list__item">
                        <FaRegHeart />Discovery
                    </li>
                    <li className="sidebar__nav__list__item">
                        <FaRecordVinyl />Coming Soon
                    </li>
                </ul>
                <ul className="sidebar__nav__list sidebar__nav__list-bottom">
                    <h4>General</h4>
                    <li className="sidebar__nav__list__item">
                        <FaUserCog /> Settings
                    </li>
                    <li className="sidebar__nav__list__item">
                        <FaDoorOpen />Logout
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Sidebar