import { initialGameDetailsState } from "../initialState";
import * as mutations from "../mutations";

export default function gameDetailReducer(
  details = initialGameDetailsState,
  action
) {
  switch (action.type) {
    case mutations.LOADING_DETAIL:
      return { ...details, isLoading: true };
    case mutations.GET_DETAIL:
      return { ...details, ...action.payload, isLoading: false };
    default:
      return details;
  }
}
