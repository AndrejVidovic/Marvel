const SetFavoriteReducer=(state="",action)=>{
    switch(action.type){
        case 'SET_FAVORITE':
            return action.payload.characters
        default:
            return state
    }
}
export default SetFavoriteReducer;