import React, { useContext } from 'react'
import './Home.css'
import { Store } from './dataStore';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navi =useNavigate();
    const [NewsList] = useContext(Store);
    const modifiedList = NewsList.slice(65, 68);
    const rightmodifiedList = NewsList.slice(69, 72);
    const leftmodifiedList = NewsList.slice(73, 76);
    const downmodifiedList = NewsList.slice(77,80);


    return (
        <>
            <div className="homeContainer">
                <div className="photos">
                    <div className="largeImge">
                       <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/box-office-oppenheimer-keeps-rising-on-sunday-as-well-is-a-solid-hit-01.jpg" alt="not found"></img>
                        <div className="img-text">Oppenheimer had yet another wonderful day at the box office with 7 crores* more added to its total.</div>
                    </div>
                    <div>
                    <div className="sideImges">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3PUwf1EO6RArld_lfqg58b85HQ2ASr4IUClXefKHN2xgPuwD" alt="Not found"></img>
                        <div className="sideimg-text">Hollywood’s Slo-Mo Self-Sabotage</div>
                        </div>
                        <div className="sideImges">
                        <img src="https://images.indianexpress.com/2023/07/F2QIexIbYAAlpzd.jpg?w=640" alt="Not found"></img>
                        <div className="sideimg-text">ISRO successfully places seven Singaporean satellites.</div>
                    </div>
                    </div>
                </div>
                <div className="innerHeading1">The Latest</div>
                <div className="flexProp">
                {rightmodifiedList.length && rightmodifiedList.filter((item) => item.cat === "HomeLatest").map((data) => {
                    return (
                        <div onClick={()=>{navi(`/${data.cat}/${data.id}`, { state:data});  }} className="cardContainer">
                            <div className="cardFooterImage">
                                <img  src={data.image} alt="Not found"></img>
                            </div>
                            <div className="cardHomeContent">
                                <div className="cardHeading" title={data.heading}>{data.heading}</div>
                                <div className="cardDesc">{data.description}</div>
                                <div className="cardFooter">Travel /<span>August 21 2017</span></div>
                            </div>
                        </div>
                    )
                })}
                </div>

                <div className="mainContainer">
                    <div className="innerContainer1">
                        <div className="innerHeading1">Latest Articles</div>
                        {modifiedList.length && modifiedList.filter((item) => item.cat === "HomeLatest").map((data) => {
                            return (
                                <div onClick={()=>{navi(`/${data.cat}/${data.id}`, { state:data});  }} className="cardContainer">
                                    <div className="cardImage">
                                        <img width="100%" height="100%" src={data.image} alt="Not found"></img>
                                    </div>
                                    <div className="cardContent">
                                        <div className="cardHeading" title={data.heading}>{data.heading}</div>
                                        <div className="cardDesc" style={{marginBottom:"10px"}}>{data.description}</div>
                                        <div className="cardFooter">Travel /<span>August 21 2017</span></div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="largeImge" >
                            <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/box-office-oppenheimer-keeps-rising-on-sunday-as-well-is-a-solid-hit-01.jpg" alt="not found"></img>
                        </div>


                    </div>
                    <div className="innerContainer2">
                        <div className="advertisements">
                            <div className="childContainer3">
                                <img width="100%" src="https://media.tenor.com/YNp5t_lLA2oAAAAM/breaking-news-news.gif" alt="not found"></img>
                            </div>
                            <div className="childContainer3">
                                <img width="100%" src="https://media.tenor.com/474I0SevAcQAAAAM/trevor-noah-breaking-news.gif" alt="not found"></img>
                            </div>
                        </div>


                        <div className="innerHeading1">Top Posts</div>
                        <div onClick={()=>{navi(`/${NewsList[68].cat}/${NewsList[68].id}`, { state:NewsList[68]});  }} className="childContainer1">
                            <div className="topImage">
                                <img src={NewsList[68].image} alt="Not found"></img>
                            </div>
                            <div className="cardHeading">{NewsList[68].heading}</div>
                            <div className="cardFooter">Travel /<span>August 21 2017</span></div>
                        </div>
                        <div className="childContainer2">
                            {leftmodifiedList.length && leftmodifiedList.filter((item) => item.cat === "HomeLatest").map((data) => {
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
                    </div>
                </div>

                <div>
                    <div className="innerHeading1">Latest Stories</div>
                    <div className="flexProp">
                        {downmodifiedList.length && downmodifiedList.filter((item) => item.cat === "HomeLatest").map((data) => {
                            return (
                                <div className="cardContainer">
                                    <div className="cardContent">
                                        <div className="cardHeading" title={data.heading}>{data.heading}</div>
                                        <div className="cardDesc">{data.description}</div>
                                        <div className="cardFooter">Travel /<span>August 21 2017</span></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>


        </>
    )
}

export default Home
