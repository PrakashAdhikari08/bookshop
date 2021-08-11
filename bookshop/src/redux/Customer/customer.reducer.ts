import {createReducer} from "reduxsauce";
import {Types} from "./customer.action";

const initialState = {
  customer: [],
};

const fetchUserSuccess = (state: any, action: any) => {
  return { ...state, customer: action.payload };
};

const updataeCustomerState = (state: any, action: any) => {
  const updatedData = state.customer.map((item: any) => {
    if (item.id !== action.payload.id) {
      return item;
    } else {
      return action.payload;
    }
  });
  return { ...state, customer: updatedData };
};

const customerReducer = createReducer(initialState, {
  [Types.FETCH_ALL_USER_SUCCESS]: fetchUserSuccess,
  [Types.CHANGE_STATUS_SUCCESS]: updataeCustomerState,
});

export default customerReducer;
