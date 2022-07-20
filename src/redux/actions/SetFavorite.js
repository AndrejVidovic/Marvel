export const SetFavorite=(characters)=>{
    return {
        type:"SET_FAVORITE",
        payload:{
            characters,
        }
    }
}