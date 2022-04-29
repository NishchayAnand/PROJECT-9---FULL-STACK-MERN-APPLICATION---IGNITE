import axios from "axios";
import { gameDetailsUrl, gameScreenshotsUrl } from "../../apiUtils";
import * as mutations from "../mutations";

export const loadDetail = (game_id) => async (dispatch) => {
  dispatch({ type: mutations.LOADING_DETAIL });
  const detailData = await axios.get(gameDetailsUrl(game_id));
  const screenshotsData = await axios.get(gameScreenshotsUrl(game_id));
  dispatch({
    type: mutations.GET_DETAIL,
    payload: {
      game: detailData.data,
      screenshots: screenshotsData.data,
    },
  });
};
