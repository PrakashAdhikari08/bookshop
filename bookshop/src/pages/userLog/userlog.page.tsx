import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import logAction from "src/redux/userlog/userlog.action";

import { Typography } from "antd";
import { RootState } from "src/redux/rootReducer";

const TableContent = styled.div`
  padding: 70px 50px 30px 50px;
`;

const { Title } = Typography;
const UserLogPage: React.FC = () => {
  const dispatch = useDispatch();
  const { adminLog, userLog } = useSelector(
    (state: RootState) => state.userlog
  );

  useEffect(() => {
    dispatch(logAction.fetchUserLogRequest());
    dispatch(logAction.fetchAdminLogRequest());
  }, []);

  console.log(adminLog);

  return (
    <>
      <TableContent>
        <Title level={4}>Customers Logs</Title>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Name</th>

              <th scope="col">Email</th>
              <th scope="col">LogIn Date</th>
              <th scope="col">LogIN Time</th>
            </tr>
          </thead>
          <tbody>
            {userLog.map((item: any, i: number) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.loginDate}</td>
                <td>{item.loginTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContent>
      <TableContent>
        <Title level={4}>Admin Logs</Title>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Admin Name</th>

              <th scope="col">Email</th>
              <th scope="col">LogIn Date</th>
              <th scope="col">LogIN Time</th>
            </tr>
          </thead>
          <tbody>
            {adminLog.map((item: any, i: number) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.loginDate}</td>
                <td>{item.loginTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContent>
    </>
  );
};

export default UserLogPage;
