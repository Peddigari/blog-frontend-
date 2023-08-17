import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hamburger from "../Assets/bars-solid.svg" 
// import Home from './Home';
const TopHeader = (props) => {
    const navigate = useNavigate();

    
    const ClickHandle=()=>{
        props.setShowNav(!props.showNav)
    }

    return (
        <div className="topText">
            <div className="title" onClick={()=>{navigate("/")} }>
            <div className="the">The</div>
            <div className='siren'>Siren</div>
            </div>
            <div onClick={ClickHandle} className="hamburger">
                <img src={Hamburger} alt="not found"></img>
            </div>
        </div>
       
    )
}

export default TopHeader
