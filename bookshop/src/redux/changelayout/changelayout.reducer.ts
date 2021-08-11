import {createReducer} from "reduxsauce";
import {Types} from "./changelayout.action";

interface layout {
  darkMode: boolean;
  collaps: boolean;
}

const initialState: layout = {
  darkMode: localStorage.getItem("darkTheme") === "true",
  collaps: localStorage.getItem("collaps") === "true",
};

const changeLayoutThemes = (state: any, action: any) => {
  localStorage.setItem("darkTheme", action.payload);
  return { ...state, darkMode: action.payload };
};

const getLayoutTheme = (state: any, action: any) => {
  const darkTheme = localStorage.getItem("darkTheme") === "true";
  const collapsTheme = localStorage.getItem("collaps") === "true";
  return { ...state, darkMode: darkTheme, collaps: collapsTheme };
};

const collapsSidebar = (state: any, action: any) => {
  localStorage.setItem("collaps", action.payload);
  return { ...state, collaps: action.payload };
};

const themeReducer = createReducer(initialState, {
  [Types.CHANGE_LAYOUT_THEME]: changeLayoutThemes,
  [Types.GET_LAYOUT_THEME]: getLayoutTheme,
  [Types.SET_COLLAPS_SIDEBAR]: collapsSidebar,
});

export default themeReducer;
