import {call, put, takeLatest} from "redux-saga/effects";
import orderService from "./order.service";
import orderAction, {Types} from "./order.action";
import {ResponseGeneratorOrder} from "./interface";
import notifications from "@Utils/notifications";

export function* orderBook(action: any) {
  try {
    const { params, book } = action;
    yield call(orderService.addOrder, params);

    yield put(orderAction.addOrderSuccess(book));
  } catch (error) {
    notifications.handleError("Order Error", error.response);
  }
}

export function* adminFetchOrder(action: any) {
  try {
    const response: ResponseGeneratorOrder = yield call(
      orderService.fetchBookByAdmin
    );
    yield put(orderAction.fetchOrderAdminSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* orderCanacleByAdmin(action: any) {
  try {
    const { id } = action;
    const response: ResponseGeneratorOrder = yield call(
      orderService.cancleOrder,
      id
    );
    yield put(orderAction.cancelOrderAdminSuccess(response.data));
    notifications.showInfo({
      title: "Book Cancel",
      message: `Order ${id} has been cancel.`,
    });
  } catch (error) {
    notifications.handleError("Cancle Order Error", error.respoonse);
  }
}
export function* confirmOrderRequest(action: any) {
  try {
    const { id } = action;
    const response: ResponseGeneratorOrder = yield call(
      orderService.confirmOrder,
      id
    );

    yield put(orderAction.cancelOrderAdminSuccess(response.data));
    notifications.showSuccess({
      title: "Cinfirm Success",
      message: `Book ${response.data.book?.bookName} has been Confirm.`,
    });
  } catch (error) {
    notifications.handleError("Cancle Order Error", error.respoonse);
  }
}

export function* userFetchOrder(action: any) {
  const { userId } = action;
  try {
    const response: ResponseGeneratorOrder = yield call(
      orderService.userOrder,
      userId
    );
    yield put(orderAction.userOrderSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* orderWatch() {
  yield takeLatest(Types.ADD_ORDER_REQUEST, orderBook);
  yield takeLatest(Types.FETCH_ORDER_ADMIN_REQUEST, adminFetchOrder);
  yield takeLatest(Types.CANCEL_ORDER_ADMIN_REQUEST, orderCanacleByAdmin);
  yield takeLatest(Types.CONFIRM_ORDER_REQUEST, confirmOrderRequest);
  yield takeLatest(Types.USER_ORDER_REQUEST, userFetchOrder);
}

export default orderWatch;
