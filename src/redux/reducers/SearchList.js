const SearchReducer=(state="",action)=>{
    switch(action.type){
        case 'SEARCH_QUERY':
            return action.payload.text;
        default:
            return state;
    }
}
export default SearchReducer;