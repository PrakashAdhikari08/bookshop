import styled from "styled-components";

const BookName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #272b41;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 6px;
`;
const AuthorName = styled.h6`
  font-size: 10px;
  font-weight: 600;
  color: balck;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const BookPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: red;
  margin: "12px 0";
`;
const BookDescription = styled.p`
  font-size: 12px;
  text-align: center;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  text-align: justify;
`;
export { BookName, AuthorName, BookPrice, BookDescription };
