import React, { useContext } from 'react'
import './CardDetails.css';
import { useLocation, useNavigate} from 'react-router-dom'
import { Store } from './dataStore';
import rythm from "../Assets/rythm.svg"
import share from "../Assets/share.svg"
import icon from "../Assets/Mask Group 21.png"
import facebook from "../Assets/square-facebook.svg"
import insta from "../Assets/instagram.svg"
import youtube from "../Assets/youtube.svg"
import twitter from "../Assets/twitter.svg"
function CardDetails() {
    const navi = useNavigate();
    const [NewsList] = useContext(Store);
    const location = useLocation();
    const cardData = location.state;
    console.log(cardData)
    // console.log(cardData);
    // const footer = NewsList.slice(1,4 );
    // if(cardData.cat === "Bollywood"){
    //     NewsList.slice(1,4)
    // }
    // else if(cardData.cat === "Hollywood"){
    //     NewsList.slice(19,24)
    // }
    // const footer = NewsList.slice(21, 24);
    // const param = useParams();
    // console.log(param)

    // const data = useContext(Store)
    // console.log(cardData)
    return (
        <>
            <div className="dynamicContainer">
                <div className="dynamicContainer1">
                    <div className="innerdynamicContainer1">
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <img src={rythm} alt="not found"></img> <div>9.3k</div></div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <img src={share} alt="not found"></img>
                            <div>share this article</div>
                        </div>
                    </div>

                    <div className="innerdynamicContainer2">
                        <div className="heading">
                            {cardData.heading}
                        </div>
                        <div className="profilediv">
                            <div className="avatardiv">
                                <div className="icondiv">
                                    <img width="80px" height="80px" src={icon} alt="not found"></img>

                                </div>
                                <div className="namediv">
                                    <div className="name">
                                        John Daniel
                                    </div>
                                    <div className="date">
                                        03 Jan 2023 10 min read
                                    </div>
                                </div>

                            </div>
                            <div className="socialIcons">
                                <img width="25px" height="25px" src={facebook} alt="not found"></img>
                                <img width="25px" height="25px" src={insta} alt="not found"></img>
                                <img width="25px" height="25px" src={twitter} alt="not found"></img>
                                <img width="25px" height="25px" src={youtube} alt="not found"></img>
                            </div>

                        </div>
                        <div width="600px" height="300px" className="postimage">
                            <img src={cardData.image} alt="not found"></img>

                        </div>
                        <div className="postDesc">{cardData.description}</div>

                    </div>
                   
                </div>
                <div className="dynamicContainer2">
                        <div className="footers">
                            <div className="dynamicMoreItems">More From The Siren</div>
                            <div className="footercards">
                                {NewsList.length && NewsList.filter((item) => ( (item.cat === cardData.cat) &&  (item.id%4) === 0 ) 
                                
                                )
                                .map((data) => {
                                    return (
                                        <div onClick={() => { navi(`/${data.cat}/${data.id}`, { state: data }); }} className="footerContainer">
                                            <div className="cardImage wt-90">
                                                <img classname="" width="100%" height="100%" src={data.image} alt="Not found"></img>
                                            </div>
                                            <div className="cardContent mw-100">
                                                <div style={{maxWidth:"300px"}} className="cardHeading  wt-90" title={data.heading}>{data.heading}</div>
                                                {/* <div className="cardDesc">{data.description}</div> */}
                                                {/* <div className="cardFooter">Travel /<span>August 21 2017</span></div> */}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
            </div>

        </>
    )
}

export default CardDetails
