import React, { useContext } from "react";
import { Store } from "./dataStore";
import './common.css';
import {useNavigate } from "react-router-dom";
import Bottom from "./Bottom";



function Bollywood() {
    const [NewsList] = useContext(Store);
    const modifiedList = NewsList.slice(0,8);
    const rightmodifiedList = NewsList.slice(9, 12);
    const navi = useNavigate()
   
   
    return (
        <>
            <div className="mainContainer">
                <div className="innerContainer1">
                    <div className="innerHeading1">Bollywood</div>
                    {modifiedList.length && modifiedList.filter((item) => item.cat === "Bollywood").map((data) => {
                        return (
                            <div onClick={()=>{navi(`/${data.cat}/${data.id}`, { state:data});  }}   className="cardContainer">
                                <div className="cardImage">
                                    <img width="100%" height="100%" src={data.image} alt="Not found"></img>
                                </div>
                                <div className="cardContent">
                                    <div className="cardHeading" title={data.heading}>{data.heading}</div>
                                    <div className="cardDesc" title={data.description}>{data.description}</div>
                                    <div className="cardFooter">Travel /<span>August 21 2017</span></div>
                                </div>
                            </div>
                        )
                    })}


                </div>
                <div className="innerContainer2">
                    <div className="innerHeading1">Top Posts</div>
                    <div  onClick={()=>{navi(`/${NewsList[8].cat}/${NewsList[8].id}`, { state:NewsList[8]});  }} className="childContainer1">
                        <div className="topImage">
                            <img src={NewsList[8].image} alt="Not found"></img>
                        </div>
                        <div className="cardHeading" title={NewsList[8].heading}>{NewsList[8].heading}</div>
                        <div className="cardFooter">Travel /<span>August 21 2017</span></div>
                        </div>
                    <div  className="childContainer2">
                        {rightmodifiedList.length && rightmodifiedList.filter((item) => item.cat === "Bollywood").map((data) => {
                            return (
                                <div onClick={()=>{navi(`/${data.cat}/${data.id}`, { state:data});  }} style={{ margin: "20px 0px" }} className="cardContainer">
                                    <div className="cardImage reduceImge">
                                        <img className="Imge" src={data.image} alt="Not found"></img>
                                    </div>
                                    <div className="cardContent">
                                        <div className="cardHeading" title={data.heading}>{data.heading}</div>
                                        <div className="cardFooter">Travel /<span>August 21 2017</span></div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                    <div className="advertisements">
                        <div className="childContainer3">
                            <img width="100%" height="100%" src="https://media.tenor.com/YNp5t_lLA2oAAAAM/breaking-news-news.gif" alt="not found"></img>
                        </div>
                        <div className="childContainer3">
                            <img width="100%" height="100%" src="https://media.tenor.com/474I0SevAcQAAAAM/trevor-noah-breaking-news.gif" alt="not found"></img>
                        </div>
                        <div className="childContainer3">
                                <img width="100%" height="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Uv_aqKspYKwFfxZVbTTm0ifSCz6nTodond7G6NYiGw&s" alt="not found"></img>
                            </div>
                            <div className="childContainer3">
                                <img width="100%" height="100%" src="https://media.tenor.com/95ImeNjSVCcAAAAM/breaking-news-breaking-lies.gif" alt="not found"></img>
                            </div>
                    </div>

                </div>
            </div>
                <Bottom/>


        </>
    )
}
export default Bollywood;





