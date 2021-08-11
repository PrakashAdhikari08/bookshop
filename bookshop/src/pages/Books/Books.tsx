import React, {useEffect} from "react";
import styled from "styled-components";
import {Button, Modal, Popconfirm, Typography} from "antd";
import {DeleteOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import BookForm from "./components/BookForm.components";
import bookAction from "@Redux/books/book.action";
import {RootState} from "@Redux/rootReducer";

const TableContent = styled.div`
  padding: 70px 50px;
`;

const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

const { Title } = Typography;
const BooksPage: React.FC = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(
    (state: RootState) => state.bookReducer.modalstate
  );
  const { books } = useSelector((state: RootState) => state.bookReducer);
  const showModal = () => {
    dispatch(bookAction.bookModalState(true));
  };

  const handleCancel = () => {
    dispatch(bookAction.bookModalState(false));
  };

  useEffect(() => {
    dispatch(bookAction.fetchBooksRequest());
  }, []);

  return (
    <>
      <TableContent>
        <TitleContent>
          <Title level={4}>Books</Title>
          <Button onClick={showModal} type="primary">
            Add Book
          </Button>
        </TitleContent>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Name</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item: any, i: number) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.bookName}</td>
                <td>{item.authorName}</td>
                <th>{item.price}</th>
                <td>
                  <Popconfirm
                    title="Are you sure ？"
                    onConfirm={() => {
                      dispatch(bookAction.deleteBooksRequest(item.id));
                    }}
                    icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                  >
                    <DeleteOutlined
                      style={{
                        fontSize: "18px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    />
                  </Popconfirm>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContent>

      <Modal
        title="Add New Books"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
      >
        <BookForm />
      </Modal>
    </>
  );
};

export default BooksPage;
