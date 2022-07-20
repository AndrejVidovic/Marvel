import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { SetFavorite } from './redux/actions/SetFavorite';
import { useState } from 'react';
var CryptoJS = require("crypto-js");

function App() {

  const dispatch=useDispatch();
  const search=useSelector(state=>state.search);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData=async()=>{
      var pubkey = "17561c019c9686d53289392604a47bf9";
      var pvtkey = "657f5901fbae56df9a1557dfd796f16ad043973a";
      var ts = new Date().getTime();
      var message = ts+pvtkey+pubkey;
      var hash = CryptoJS.MD5(message);
      const fetchOptions={
          method:'GET',
          headers: { 'Content-Type': 'application/json'},
      };
      if (search) {
       console.log("a jebote")
       let res=await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=${ts}&apikey=${pubkey}&hash=${hash}`,fetchOptions);
        let data=await res.json();
        setItems(data.data.results);
      }
    }
    getData();
    dispatch(SetFavorite(JSON.parse(localStorage.getItem("favorites"))))
  }, [search]);
  
  return (
    <div className="App">
      <Navbar/>
      <Home items={items}/>
    </div>
  );
}

export default App;
