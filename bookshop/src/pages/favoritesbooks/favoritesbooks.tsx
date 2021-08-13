import React, {useEffect} from "react";
import {Typography} from "antd";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import favAction from "src/redux/favourite/favourite.action";
import {RootState} from "src/redux/rootReducer";

const TableContent = styled.div`
  padding: 70px 50px;
`;
const { Title } = Typography;
const FavoritesBooks: React.FC = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { id } = useSelector((state: RootState) => state.auth.userData);
  const { favBooks } = useSelector((state: RootState) => state.favouriteBook);
  useEffect(() => {
    dispatch(favAction.fetchFavouriteBooks(id));
  }, [id]);
  return (
    <TableContent>
      <Title level={4}>Favorites Books</Title>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Book Id</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {favBooks.map((item: any, i: number) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>

              <th scope="row">{item?.bookId}</th>
              <td>{item?.bookName}</td>
              <td>{item?.authorName}</td>
              <td>{item?.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(favAction.removeFavouriteRequest(id, item.bookId));
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContent>
  );
};

export default FavoritesBooks;
