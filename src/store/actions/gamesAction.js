import axios from "axios";
import {
  popularGamesUrl,
  newGamesUrl,
  upcomingGamesUrl,
  searchGameUrl,
} from "../../apiUtils";
import * as mutations from "../mutations";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  dispatch({
    type: mutations.FETCH_GAMES,
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(game_name));
  dispatch({
    type: mutations.FETCH_SEARCHED,
    payload: { searched: searchGames.data.results },
  });
};
