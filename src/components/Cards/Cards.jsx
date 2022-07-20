import React from "react";
import './Cards.css';
import { useDispatch } from "react-redux";
import { SetFavorite } from "../../redux/actions/SetFavorite";

function Cards(props){ 
    const dispatch=useDispatch();
    const character=props.data;
    var favorites=props.favorites
    const src=props.data.thumbnail.path+"."+props.data.thumbnail.extension; 

    const SetAsFavorite=()=>{
        let array=favorites;
        if(array.find(array=>array.name===character.name))
        {    
            array=array.filter(element=>element.name!==character.name);
        }
        else{
            array.push(character); 
        }
        localStorage.setItem("favorites",JSON.stringify(array));
        dispatch(SetFavorite(JSON.parse(localStorage.getItem("favorites"))))
    }
    const FavoriteStar=()=>{
        let array=favorites;
        if(array.find(array=>array.name===character.name))
        {
            return "fa fa-star"
        }
        else{
            return "fa fa-star-o"
        }
    }
    
    return(
        <div className="card">
            <div className="card_inner">
                <div className="card_front">
                    <div className="character_image">
                        <img src={src} alt={character.name}></img>
                    </div>
                </div>
                <div className="card_back">
                    <div className="character_name">
                        <h3>{character.name}</h3> 
                    </div>
                    <div className="character_star">
                        <i onClick={()=>SetAsFavorite()} className={FavoriteStar()} ></i>
                    </div>          
                    <div className="character_description">
                        <p>{character.description===""?"Sorry, there is no description for this character":character.description}</p>
                    </div>
                </div>
            </div>   
        </div>   
    )
}
export default Cards;