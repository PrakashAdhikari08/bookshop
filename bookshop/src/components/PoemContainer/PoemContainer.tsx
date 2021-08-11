import React from "react";
import Styled from "styled-components";

const Title = Styled.h6`
color: #272b41;
font-size: 16px;
font-weight: 600;
text-align: center;

`;
const Poem = Styled.p`
color: #272b41;
font-size: 14px;
font-weight: 400;
text-align: center;
white-space: pre-wrap;

`;

interface PoemProps {
  poemTitle: string;
  poem: string;
}
const PoemContiner: React.FC<PoemProps> = ({ poem, poemTitle }) => {
  return (
    <>
      <Title>{poemTitle}</Title>
      <Poem>{poem.replace("<br/>", "\n")}</Poem>
    </>
  );
};

export default PoemContiner;
