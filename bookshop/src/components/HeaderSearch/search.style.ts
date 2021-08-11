import Styled from "styled-components";

interface Searchprops {
  darkMode?: boolean;
}

const Div = Styled.div<Searchprops>`


@media (max-width: 750px) {
    padding: 0 35px;
    
  }

.ant-input{
    border: none;
    background: ${({ theme, darkMode }) =>
      darkMode ? theme["dark-color"] : ""};
}
.ant-input: focus{
    border: noen;
    outline: 0;
    box-shadow: none;
}
.certain-category-icon{
    font-size: 18px;
    position: relative;
    bottom: -4px;
    color: ${({ theme, darkMode }) =>
      darkMode ? `#A8AAB3` : theme["gray-color"]};
    @media only screen and (max-width: 767px){
        bottom: 0;
    }
    svg{
        margin-top: 4px;
        @media only screen and (max-width: 767px){
            width: 12px;
        }
    }
}
`;

const Menu = Styled.div`


`;

export { Div, Menu };
