import React, {useEffect, useState} from "react";
import {Col, Input, Row, Typography} from "antd";
import OpenApiBookCard from "@Components/BookCard/OpenApiBookCard.components";
import axios from "axios";

const { Search } = Input;
const { Title } = Typography;

const BookOpenApi: React.FC = () => {
  const [book, setBook] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");

  const onSearch = (value: string) => setSearch(value);

  useEffect(() => {
    axios
      .get(
        `${
          search
            ? `https://api.itbook.store/1.0/search/${search}`
            : "https://api.itbook.store/1.0/new"
        }`
      )
      .then((data) => {
        console.log(data.data.books);
        setBook(data.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  return (
    <>
      <div
        style={{
          marginTop: "5px ",
          background: "#EEEE",
          marginBottom: "10px",
          padding: "20px 20px 25px 20px",
        }}
      >
        <Title level={4}>Search Book On IT Books</Title>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </div>
      <Row gutter={{ xs: 8, sm: 12, md: 16, lg: 24 }}>
        {book.map((item, i) => (
          <Col key={i} xs={24} sm={12} md={6}>
            <OpenApiBookCard {...item} />
          </Col>
        ))}

        {/* {book
          .map((item, i) => (
            <Col key={i} xs={24} sm={12} md={6}>
              <OpenApiBookCard book={item} />
            </Col>
          ))} */}
      </Row>
    </>
  );
};

export default BookOpenApi;
