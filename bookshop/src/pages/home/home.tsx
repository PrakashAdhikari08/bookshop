import MainPageNav from "src/components/Navbar/Navbar.component";
import {Container} from "src/styles/globalStyle";
import React from "react";
import BookBlock from "./Components/BookBlock.components";
import BookOpenApi from "./Components/OpenapiItBook.components";
import RandomPoem from "./Components/RandomPoem.components";
import {H5} from "./styles/home.styles";

const Home: React.FC = () => {
  return (
    <>
      <MainPageNav />
      <div style={{ marginTop: "68px" }} />
      <Container>
        <H5>Books</H5>
        <BookBlock />
        <H5>Open Api-1(IT Books)</H5>
        <BookOpenApi />
        <H5>Open Api-2(Poemist)</H5>
        <RandomPoem />
      </Container>
    </>
  );
};

export default Home;
