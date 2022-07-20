import React from "react";
import './Search.css'
import {useDispatch} from 'react-redux'
import { SearchList } from "../../redux/actions/SearchList";

function Search(){
    const dispatch=useDispatch();

    const handleSearch=(event)=>{
        var target=event.target.value; 
        dispatch(SearchList(target));
    }

    return(
        <div className="search" >
            <i className="fa fa-search"></i>
            <input
                id="search_box"
                name="search"
                placeholder="Search..."               
                type="text"
                autoComplete="off"
                onChange={handleSearch}>
            </input>
        </div>   
    )
}
export default Search;