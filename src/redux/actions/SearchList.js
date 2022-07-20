export const SearchList=(search)=>{
    return{
        type:"SEARCH_QUERY",
        payload:{
            text:search
        }
    }
}