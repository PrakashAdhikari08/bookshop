import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Popconfirm, Typography} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
import {RootState} from "@Redux/rootReducer";
import orderAction from "@Redux/order/order.action";
import {ImCancelCircle} from "react-icons/im";
import {BiSelectMultiple} from "react-icons/bi";

const TableContent = styled.div`
  padding: 70px 50px;
`;

const { Title } = Typography;
const Orders: React.FC = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { role, id } = useSelector((state: RootState) => state.auth.userData);
  const { bookOrderAdmin, userOrder } = useSelector(
    (state: RootState) => state.orderReducer
  );

  useEffect(() => {
    if (role === "ADMIN") {
      dispatch(orderAction.fetchOrderAdminRequest());
    } else {
      dispatch(orderAction.userOrderRequest(id));
    }
  }, [role, id]);

  return (
    <TableContent>
      <Title level={4}>Books Orders</Title>

      {role === "ADMIN" ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">OrderId</th>
              <th scope="col">Book Name</th>
              <th scope="col">Price</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Order Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookOrderAdmin.map((item: any, i: number) => (
              <tr key={item.id}>
                <th scope="row">{i + 1}</th>
                <td>{item?.orderId}</td>
                <td>{item?.book?.bookName}</td>
                <td>{item?.book?.price}</td>
                <td>{item?.customerName}</td>
                <td>{item?.orderDate}</td>
                <td>
                  {item?.status === "CANCELLED" ? (
                    <span
                      style={{
                        padding: "2px 4px",
                        color: "#FFFF",
                        background: "red",
                        fontSize: "11px",
                      }}
                    >
                      {item?.status}
                    </span>
                  ) : item?.status === "COMPLETED" ? (
                    <span
                      style={{
                        padding: "2px 4px",
                        color: "#FFFF",
                        background: "green",
                        fontSize: "11px",
                      }}
                    >
                      {item?.status}
                    </span>
                  ) : (
                    <span
                      style={{
                        padding: "2px 4px",
                        color: "#FFFF",
                        background: "blue",
                        fontSize: "11px",
                      }}
                    >
                      {item?.status}
                    </span>
                  )}
                </td>
                <td>
                  <Popconfirm
                    onConfirm={() => {
                      dispatch(orderAction.confirmOrderRequest(item.orderId));
                    }}
                    title="Are you sure ？"
                    icon={<QuestionCircleOutlined style={{ color: "green" }} />}
                  >
                    <button className="btn btn-success">
                      <BiSelectMultiple /> Confirm
                    </button>
                  </Popconfirm>
                  <br />
                  <br />
                  <Popconfirm
                    onConfirm={() => {
                      dispatch(
                        orderAction.cancelOrderAdminRequest(item.orderId)
                      );
                    }}
                    title="Are you sure you want to Cancle？"
                    icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                  >
                    <button className="btn btn-danger">
                      <ImCancelCircle /> Cancel
                    </button>
                  </Popconfirm>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">OrderId</th>
              <th scope="col">Book Name</th>
              <th scope="col">Price</th>

              <th scope="col">Order Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {userOrder.map((item: any, i: number) => (
              <tr key={item.id}>
                <th scope="row">{i + 1}</th>
                <td>{item?.orderId}</td>
                <td>{item?.book?.bookName}</td>
                <td>{item?.book?.price}</td>

                <td>{item?.orderDate}</td>
                <td>
                  {item?.status === "CANCELLED" ? (
                    <span
                      style={{
                        padding: "2px 4px",
                        color: "#FFFF",
                        background: "red",
                        fontSize: "11px",
                      }}
                    >
                      {item?.status}
                    </span>
                  ) : item?.status === "COMPLETED" ? (
                    <span
                      style={{
                        padding: "2px 4px",
                        color: "#FFFF",
                        background: "green",
                        fontSize: "11px",
                      }}
                    >
                      {item?.status}
                    </span>
                  ) : (
                    <span
                      style={{
                        padding: "2px 4px",
                        color: "#FFFF",
                        background: "blue",
                        fontSize: "11px",
                      }}
                    >
                      {item?.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </TableContent>
  );
};

export default Orders;
