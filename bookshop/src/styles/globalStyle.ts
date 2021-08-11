import Styled from "styled-components";

interface GridProps {
  background: string;
}
const GridContainer = Styled.div<GridProps>` 
 display: grid;
 place-items: center;
 min-height: 100vh;
 
 
 background-size: cover;
 background-color: #272b41;;
 @media only screen and (min-width: 576px) {
    background-image: url(${({ background }) => background});
  }
  .justify-center{
      display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  .login-form-forgot {
          float: right;
        }
`;
const GridContainers = Styled.div`
color: #ffff;
font-size: 24px; 
 display: grid;
 place-items: center;
 min-height: 90vh;
 background-size: cover;
 background-color: #272b41;`;

const Container = Styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

@media only screen and (min-width: 768px) {
  
    width: 750px;
  
}
@media only screen and (min-width: 992px) {
 
    width: 970px;
  
}
@media only screen and (min-width: 1200px) {

    width: 1170px;
  
}



`;

export { GridContainer, GridContainers, Container };
