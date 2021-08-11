import React from "react";
import {Button, Card} from "antd";

import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {AuthorName, BookDescription, BookName, BookPrice,} from "./BookCard.styles";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Redux/rootReducer";
import ModalAction from "@Redux/LoginModal/LoginModal.action";
import orderAction from "@Redux/order/order.action";
import favAction from "@Redux/favourite/favourite.action";

interface bookProps {
  book: {
    id: number;
    bookName: string;
    authorName: string;
    description: string;
    price: number;
  };
}

const BookCard: React.FC<bookProps> = ({ book }) => {
  const dispatch = useDispatch();
  const { userData, userLogin } = useSelector((state: RootState) => state.auth);

  const orderBook = () => {
    if (userLogin) {
      dispatch(
        orderAction.addOrderRequest(
          // @ts-ignore
          { bookId: book.id, userId: userData.id },
          book
        )
      );
    } else {
      dispatch(ModalAction.modalOpenRequest(true));
    }
  };

  const favoriteAdd = () => {
    if (userLogin) {
      // @ts-ignore
      dispatch(favAction.addFavouriteRequest(userData.id, book.id));
    } else {
      dispatch(ModalAction.modalOpenRequest(true));
    }
  };

  return (
    <>
      <Card
        style={{ width: "100%", margin: "12px", textAlign: "center" }}
        actions={[
          <Button
            onClick={favoriteAdd}
            type="link"
            icon={<HeartOutlined style={{ color: "red" }} />}
          >
            Favorite
          </Button>,
          <Button
            style={{ color: "blue" }}
            type="link"
            icon={<ShoppingCartOutlined />}
            onClick={orderBook}
          >
            Order
          </Button>,
        ]}
      >
        <BookName>{book.bookName}</BookName>

        <AuthorName>{book.authorName}</AuthorName>
        <BookPrice>${book.price}</BookPrice>
        <BookDescription>{book.description}</BookDescription>
      </Card>
    </>
  );
};

export default BookCard;
