import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import TopHeader from './TopHeader';

function LinksComp() {
    const [showNav , setShowNav]=useState(false);
    
    return (
        <>
        <div><TopHeader showNav={showNav} setShowNav={setShowNav}/></div>
        
        <div className={showNav ? "VerticalNavLinks" : "NavLinks"}>
            <Link className="Links" onClick={()=>{setShowNav(false)}} to="/">Home</Link>
            <Link className="Links" onClick={()=>{setShowNav(false)}} to="/Bollywood">Bollywood</Link>
            <Link className="Links" onClick={()=>{setShowNav(false)}} to="/Technology">Technology</Link>
            <Link className="Links" onClick={()=>{setShowNav(false)}} to="/Hollywood">Hollywood</Link>
            <Link className="Links" onClick={()=>{setShowNav(false)}} to="/Fitness">Fitness</Link>
            <Link className="Links" onClick={()=>{setShowNav(false)}} to="/Food">Food</Link>
            
        </div>
        </>
    )
}

export default LinksComp
