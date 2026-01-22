import { useState } from "react"
import { LOGO_URL } from "./constants"
import { Link } from "react-router-dom";
const Header = () => {
    const [btnName, setBtnName] = useState("login");

    return (
        <div className="header-container">
            <img className="logo" src={LOGO_URL} alt="logo-img" />
            <ul className="nav-items">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>Search</li>
                <li>Offers</li>
                <li>Help</li>
                <li>
                    <Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <button onClick={() => { setBtnName(prev => prev === "login" ? "logout" : "login") }}>{btnName}</button>

            </ul>
        </div>
    )
}
export default Header;