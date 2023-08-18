import React from 'react'
import './Bottom.css';
import facebook from "../Assets/square-facebook.svg"
import insta from "../Assets/instagram.svg"
import youtube from "../Assets/youtube.svg"
import twitter from "../Assets/twitter.svg"

function Bottom() {
    return (
        <>
            <div className="MainCont">
                <div className="firstCont">
                   <div id="title">
                   <div id="the">The</div>
                    <div id="siren">Siren</div>
                   </div>
                    <div className="sirenpara">The Siren is India's leading platform where you can find all the information about different categories like technology, fitness, food, bollywood, hollywood in an easy way</div>
                    <div> <img width="25px" height="25px" src={facebook} alt="not found"></img>
                                <img width="25px" height="25px" src={insta} alt="not found"></img>
                                <img width="25px" height="25px" src={twitter} alt="not found"></img>
                                <img width="25px" height="25px" src={youtube} alt="not found"></img></div>
                </div>
                <div className="secCont">
                <div>
                <ul>
                <h2>Services</h2>
                        <li>Home</li>
                        <li>Bollywood</li>
                        <li>Technology</li>
                        <li>Hollywood</li>
                        <li>Fitness</li>
                        <li>Food</li>
                    </ul>
                </div>
                   
                </div>
                <div className="thirdCont">
                    <div> <ul>
                    <h2>Resources</h2>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul></div>
                   
                </div>
           
            </div>
            
        </>
    )
}

export default Bottom
