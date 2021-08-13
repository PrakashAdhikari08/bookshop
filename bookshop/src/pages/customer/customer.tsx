import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Switch, Typography} from "antd";
import {RootState} from "src/redux/rootReducer";
import customerAction from "src/redux/Customer/customer.action";

const TableContent = styled.div`
  padding: 70px 50px;
`;

const { Title } = Typography;
const Customer: React.FC = () => {
  const dispatch = useDispatch();
  const { customer } = useSelector((state: RootState) => state.customerReducer);

  useEffect(() => {
    dispatch(customerAction.fetchAllUserReq());
  }, []);

  const chagnestatus = (customerId: number, status: boolean) => {
    dispatch(customerAction.changeStatusReq(customerId, status));
  };
  return (
    <TableContent>
      <Title level={4}>Customers</Title>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {customer.map((item: any, i: number) => (
            <tr key={item.id}>
              <th scope="row">{i + 1}</th>
              <td>
                {item.firstName}&nbsp;{item.lastName}
              </td>
              <td>{item.email}</td>

              <td>
                <Switch
                  checked={item.enabled}
                  checkedChildren="Activated"
                  unCheckedChildren="Disabled"
                  onChange={(checked: boolean) => {
                    chagnestatus(item.id, checked);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContent>
  );
};

export default Customer;
