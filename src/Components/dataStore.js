import React, { useState,useEffect } from 'react'
import { createContext } from 'react'
// import Fitness from './Fitness';

// import Bollywood from './Bollywood';
export const Store =createContext();
function DataStore(props){
    const [data,setData]=useState("")
    useEffect(()=>{
        // let base_url="http://localhost:3000"
        let base_url="https://node-blog-app-5dec.onrender.com"
        fetch(base_url)
        .then(res=>res.json())
        .then(datas=>setData(datas))
        console.log(data);
    },[data])
    return(
        <>
      {  data&&<Store.Provider value={[data,setData]}>
            {props.children}
            {/* <Bollywood/> */}
            {/* <Fitness/> */}
           
        </Store.Provider>}
        </>
    )
}
export default DataStore;
