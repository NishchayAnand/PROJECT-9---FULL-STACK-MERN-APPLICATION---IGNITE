import { combineReducers } from "redux";
import games from "./gamesReducer";
import gameDetails from "./gameDetailReducer";

const rootReducer = combineReducers({ games, gameDetails });

export default rootReducer;
