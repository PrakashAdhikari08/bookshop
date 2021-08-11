import {createReducer} from "reduxsauce";
import {Types} from "./favourite.action";

const initialstate = {
  favBooks: [],
};

const addFavouriteSuccess = (state: any, action: any) => {
  return { ...state };
};

const featchFavouritSuccess = (state: any, action: any) => {
  return { ...state, favBooks: action.payload };
};

const removeFavouriteSuccess = (state: any, action: any) => {
  const { userId, bookId } = action;

  const afterRemove = state.favBooks.filter(
    (item: any) => bookId !== item.bookId && userId !== item.userId
  );

  return { ...state, favBooks: afterRemove };
};

const favReducer = createReducer(initialstate, {
  [Types.ADD_FAVOURITE_SUCCESS]: addFavouriteSuccess,
  [Types.FEATCH_FAVOURIT_SUCCESS]: featchFavouritSuccess,
  [Types.REMOVE_FAVOURITE_SUCCESS]: removeFavouriteSuccess,
});

export default favReducer;
