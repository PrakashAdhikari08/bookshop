import React, {useEffect} from "react";
import {Col, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import BookCard from "@Components/BookCard/BookCard.components";
import bookAction from "@Redux/books/book.action";
import {RootState} from "@Redux/rootReducer";

const BookBlock: React.FC = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state: RootState) => state.bookReducer);

  useEffect(() => {
    dispatch(bookAction.fetchBooksRequest());
  }, []);

  return (
    <>
      <Row gutter={{ xs: 8, sm: 12, md: 16, lg: 24 }}>
        {books.map((item: any) => (
          <Col key={item.id} xs={24} sm={12} md={6}>
            <BookCard book={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BookBlock;
