import Styled from "styled-components";

interface styledInterface {
  authPage?: boolean;
}

const WrapperNav = Styled.div<styledInterface>`
position: fixed;
z-index: 50;
top:0;
width: 100%;
background-color: ${({ authPage }) => (authPage ? "" : "#272b41")};
height: 68px;
`;
const Navbar = Styled.div`
display: flex;
justify-content: space-between;
align-items:center;
height: 68px;
.logo-on-nav h5{
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    display: flex;
    align-self: center; 
    
}


.icon{
    cursor: pointer;
    color: #fff;
    font-size: 26px;
    &:not(:last-child){
        margin-right: 16px;
    }

}


`;
const Margin = Styled.div`
margin-top: 64px;
`;

export { WrapperNav, Margin, Navbar };
