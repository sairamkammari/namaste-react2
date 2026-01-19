import { useState } from "react"
import {LOGO_URL} from "./constants"
const Header = () =>{
    const [btnName, setBtnName] = useState("login");
    
    return(
        <div className="header-container">
            <img className="logo" src={LOGO_URL} alt="logo-img"/>
            <ul className="nav-items">
                <li>Swiggy Corporate</li>
                <li>Search</li>
                <li>Offers</li>
                <li>Help</li>
                <li>Sairam</li>
                <li>Cart</li>
                <button onClick={()=>{setBtnName(prev=> prev==="login"?"logout":"login")}}>{btnName}</button>
                
            </ul>
        </div>
    )
}
export default Header;