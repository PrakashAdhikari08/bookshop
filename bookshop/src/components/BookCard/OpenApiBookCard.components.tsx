import React from "react";
import styled from "styled-components";
import {Button, Card} from "antd";

interface BookProps {
  title?: string;
  subtitle?: string;
  isbn13?: string;
  price?: string;
  image?: string;
  url?: string;
}

const BookName = styled.h5`
  text-align: center;
  font-size: 18px;
  color: blue;
  font-weight: 700;
`;
const SubTitle = styled.p`
  text-align: center;
  font-size: 12px;
  color: #131623;
  font-weight: 400;
  margin: 2px;
`;
const Isbn = styled.p`
  text-align: center;
  font-size: 12px;
  color: green;
  font-weight: 600;
`;
const Price = styled.p`
  text-align: center;
  font-size: 16px;
  color: red;
  font-weight: 700;
`;
const OpenApiBookCard: React.FC<BookProps> = ({
  title,
  subtitle,
  isbn13,
  price,
  image,
  url,
}) => {
  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={<img alt="example" src={image} />}
    >
      <BookName>{title}</BookName>
      <SubTitle>{subtitle}</SubTitle>
      <Isbn>ISBN13:&nbsp;{isbn13}</Isbn>
      <Price>{price}</Price>
      <Button
        type="primary"
        onClick={() => {
          window.open(url, "_blank");
        }}
        block
        size="small"
      >
        View Details
      </Button>
    </Card>
  );
};

export default OpenApiBookCard;
