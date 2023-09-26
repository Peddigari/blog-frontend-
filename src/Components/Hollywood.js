import React, { useContext } from "react";
import { Store } from "./dataStore";
import './common.css';
import { useNavigate } from "react-router-dom";
import Bottom from "./Bottom";



function Hollywood() {
    const navi = useNavigate();
    const [NewsList] = useContext(Store);
    const modifiedList = NewsList.slice(12, 20);
    const rightmodifiedList = NewsList.slice(21, 24);
    // console.log(NewsList);
    return (
        <>
            <div className="mainContainer">
                <div className="innerContainer1">
                    <div className="innerHeading1">Hollywood</div>
                    {modifiedList.length && modifiedList.filter((item) => item.cat === "Hollywood").map((data) => {
                        return (
                            <div onClick={()=>{navi(`/${data.cat}/${data.id}`, { state:data});  }} className="cardContainer">
                                <div className="cardImage">
                                    <img width="100%" height="100%" src={data.image} alt="Not found"></img>
                                </div>
                                <div className="cardContent">
                                    <div className="cardHeading" title={data.heading}>{data.heading}</div>
                                    <div className="cardDesc">{data.description}</div>
                                    <div className="cardFooter">Travel /<span>August 21 2017</span></div>
                                </div>
                            </div>
                        )
                    })}


                </div>
                <div className="innerContainer2">
                    <div className="innerHeading1">Top Posts</div>
                    <div onClick={()=>{navi(`/${NewsList[20].cat}/${NewsList[20].id}`, { state:NewsList[20]});  }} className="childContainer1">
                        <div className="topImage">
                            <img src={NewsList[20].image} alt="Not found"></img>
                        </div>
                        <div className="cardHeading">{NewsList[20].heading}</div>
                        <div className="cardFooter">Travel /<span>August 21 2017</span></div>
                        </div>
                    <div className="childContainer2">
                        {rightmodifiedList.length && rightmodifiedList.filter((item) => item.cat === "Hollywood").map((data) => {
                            return (
                                <div onClick={()=>{navi(`/${data.cat}/${data.id}`, { state:data});  }} style={{ margin: "20px 0px" }} className="cardContainer">
                                    <div className="cardImage reduceImge">
                                        <img className="Imge" src={data.image} alt="Not found"></img>
                                    </div>
                                    <div className="cardContent">
                                        <div className="cardHeading">{data.heading}</div>
                                        <div className="cardFooter">Travel /<span>August 21 2017</span></div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                    <div className="advertisements">
                        <div className="childContainer3">
                            <img width="100%" src="https://media.tenor.com/YNp5t_lLA2oAAAAM/breaking-news-news.gif" alt="not found"></img>
                        </div>
                        <div className="childContainer3">
                            <img width="100%" src="https://media.tenor.com/474I0SevAcQAAAAM/trevor-noah-breaking-news.gif" alt="not found"></img>
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
export default Hollywood;





