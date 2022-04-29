import { initialGamesState } from "../initialState";
import * as mutations from "../mutations";

export default function gamesReducer(games = initialGamesState, action) {
  switch (action.type) {
    case mutations.FETCH_GAMES:
      return { ...games, ...action.payload };
    case mutations.FETCH_SEARCHED:
      return { ...games, ...action.payload };
    case mutations.CLEAR_SEARCHED:
      return { ...games, searched: [] };
    default:
      return games;
  }
}
