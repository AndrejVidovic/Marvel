import React from "react";
import './Home.css';
import {useSelector} from 'react-redux';
import Cards from "../Cards/Cards";

function Home({items}){
    const search=useSelector(state=>state.search); //search word
    var favorites=useSelector(state=>state.setFavorite);
    if(favorites==null) favorites=[]; // local storage vraca null
    
    return( 
        <div style={{paddingTop:"3rem"}}>
            {search===''?
                <div>
                    {favorites.length===0?
                        <div className="text">
                            <p>You do not have saved/favorite characters...</p>
                            <p>Seach characters...</p>  
                        </div>
                        :
                        <div className="card_container">
                            {favorites.map((data,index)=>
                                <Cards favorites={favorites} data={data}  key={index}/>
                                )}
                        </div>
                    }
                </div>
                :
                <div className="card_container">
                    {items.map((data,index)=>
                         <Cards favorites={favorites} data={data} key={index}/>  
                    )}
                </div>   
            }
        </div> 
    )
}
export default Home;