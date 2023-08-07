import React,{useState} from 'react'
import Hamburger from "../Assets/bars-solid.svg" 
const TopHeader = (props) => {
    
    const ClickHandle=()=>{
        props.setShowNav(!props.showNav)
    }

    return (
        <div className="topText">
            <div className="title">
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
