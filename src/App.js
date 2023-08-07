// import '../style.css'
import  React , {useEffect} from 'react';
import './App.css';
import TopHeader from './Components/TopHeader';
import { BrowserRouter, Route, Routes, useLocation , useNavigate} from 'react-router-dom'
import Bollywood from './Components/Bollywood'
import Home from './Components/Home'
import LinksComp from './Components/LinksComp'
import Hollywood from './Components/Hollywood'
import Fitness from './Components/Fitness'
import Food from './Components/Food'
import Technology from './Components/Technology'
import DataStore from './Components/dataStore';
import CardDetails from './Components/CardDetails';



function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/')
   
  // }, [])
  return (
    <div className="App">
     
      <BrowserRouter>
      
            <LinksComp/>
            
            <DataStore>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bollywood/' element={<Bollywood/>}/>
                <Route path='/technology' element={<Technology/>}/>
                <Route path='/hollywood' element={<Hollywood/>}/>
                <Route path='/fitness' element={<Fitness/>}/>
                <Route path='/food' element={<Food/>}/>
                <Route path='/:cat/:id' element={<CardDetails/>}/>
            </Routes>
            </DataStore>

            </BrowserRouter>
            

    </div>
  );
}

export default App;
