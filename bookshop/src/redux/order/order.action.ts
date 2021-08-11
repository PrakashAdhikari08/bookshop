import {createActions} from "reduxsauce";

export const { Types, Creators } = createActions({
  addOrderRequest: ["params", "book"],
  addOrderSuccess: ["message"],
  fetchOrderAdminRequest: null,
  fetchOrderAdminSuccess: ["payload"],

  cancelOrderAdminRequest: ["id"],
  cancelOrderAdminSuccess: ["payload"],

  confirmOrderRequest: ["id"],
  confirmOrderSuccess: ["payload"],

  userOrderRequest: ["userId"],
  userOrderSuccess: ["payload"],
});

export default Creators;
