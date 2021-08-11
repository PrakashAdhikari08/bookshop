import {createActions} from "reduxsauce";

export const { Types, Creators } = createActions({
  addFavouriteRequest: ["userId", "bookId"],
  addFavouriteSuccess: null,

  fetchFavouriteBooks: ["userId"],
  featchFavouritSuccess: ["payload"],

  removeFavouriteRequest: ["userId", "bookId"],
  removeFavouriteSuccess: ["userId", "bookId"],
});

export default Creators;
