import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import TopHeader from './TopHeader';

function LinksComp() {
    const [showNav , setShowNav]=useState(false);
    
    return (
        <>
        <div><TopHeader showNav={showNav} setShowNav={setShowNav}/></div>
        
        <div className={showNav ? "VerticalNavLinks" : "NavLinks"}>
            <Link className="Links" to="/">Home</Link>
            <Link className="Links" to="/Bollywood">Bollywood</Link>
            <Link className="Links" to="/Technology">Technology</Link>
            <Link className="Links" to="/Hollywood">Hollywood</Link>
            <Link className="Links" to="/Fitness">Fitness</Link>
            <Link className="Links" to="/Food">Food</Link>
            
        </div>
        </>
    )
}

export default LinksComp
