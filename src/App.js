import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Search from './components/ui/Search';

const App = () => {


  const [items, setItems] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [query,setQuery]=useState('')

    useEffect(()=>{
        const fetchItems = async()=>{
            const result=await axios(`https://breakingbadapi.com/api/characters?name=${query}`)
            console.log(result.data)
            setItems(result.data)
            setIsLoading(false)
        }
        fetchItems()
    },[query])


  return (
    <div className="container">
        <Header/>
        <div style={{textAlign:"center"}}>
        <h1>Breaking Bad - Bio Reveal</h1><br></br>
        <h3>Select a card to reveal info!</h3>
        <h5>[ API source : <a href="https://breakingbadapi.com/api/characters" style={{textDecoration:"none"}}>BreakingBadAPI</a>  ]</h5>
        </div>
        <br></br><br></br>
        <Search getQuery={ (q)=>setQuery(q) }/><br></br><br></br>
        <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
