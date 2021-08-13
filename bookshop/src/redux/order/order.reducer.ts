import notifications from "src/utils/notifications";
import {createReducer} from "reduxsauce";
import {Types} from "./order.action";

interface DataProps {
  bookOrderAdmin?: [];
  userOrder?: [];
}

const initilaState: DataProps = {
  bookOrderAdmin: [],
  userOrder: [],
};

const orderSuccess = (state: any, action: any) => {
  notifications.showSuccess({
    title: "Success",
    message: `Book ${action.message.bookName} is Orderd`,
  });
  return { ...state };
};

const fetchOrderAdminSuccess = (state: any, action: any) => {
  return { ...state, bookOrderAdmin: action.payload };
};

const cancelOrderAdminSuccess = (state: any, action: any) => {
  const updatedData = state.bookOrderAdmin.map((item: any) => {
    if (item.orderId !== action.payload.orderId) {
      return item;
    } else {
      return action.payload;
    }
  });
  return { ...state, bookOrderAdmin: updatedData };
};

const confirmOrderSuccessDone = (state: any, action: any) => {
  const updatedData = state.bookOrderAdmin.map((item: any) => {
    if (item.orderId !== action.payload.orderId) {
      return item;
    } else {
      return action.payload;
    }
  });
  return { ...state, bookOrderAdmin: updatedData };
};

const userOrderSuccessDone = (state: any, action: any) => {
  return { ...state, userOrder: action.payload };
};

const orderReducer = createReducer(initilaState, {
  [Types.ADD_ORDER_SUCCESS]: orderSuccess,
  [Types.FETCH_ORDER_ADMIN_SUCCESS]: fetchOrderAdminSuccess,
  [Types.CANCEL_ORDER_ADMIN_SUCCESS]: cancelOrderAdminSuccess,
  [Types.CONFIRM_ORDER_SUCCESS]: confirmOrderSuccessDone,
  [Types.USER_ORDER_SUCCESS]: userOrderSuccessDone,
});

export default orderReducer;
