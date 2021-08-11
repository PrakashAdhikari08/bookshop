import {createReducer} from "reduxsauce";
import {Types} from "./LoginModal.action";

interface Modelstate {
  openmodal: boolean;
}
const initialState: Modelstate = {
  openmodal: false,
};

const modalState = (state: Modelstate, action: any) => {
  return { ...state, openmodal: action.payload };
};

const modalReducer = createReducer(initialState, {
  [Types.MODAL_OPEN_REQUEST]: modalState,
});

export default modalReducer;
