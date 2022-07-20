import { combineReducers } from "redux";
import SearchReducer from "./SearchList";
import SetFavoriteReducer from "./SetFavorite";

const rootReducer=combineReducers({
    search:SearchReducer,
    setFavorite:SetFavoriteReducer,
})
export default rootReducer;