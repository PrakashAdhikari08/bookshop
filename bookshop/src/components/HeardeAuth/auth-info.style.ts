import Styled from "styled-components";

interface themeProps {
  darkMode?: boolean;
}

const InfoWraper = Styled.div<themeProps>`
display: flxe;

justify-content: end;

.mobile-action{
    display: none;
    
@media (max-width: 750px) {
    display: block;
  }
}


 .btn-search{
     svg{
        margin-bottom:  -5px !important;
     }
 }

 .head-example , a {
   text-decoration: none;
   color: ${({ theme }) => theme["text-color-secondary"]};
   box-shadow: none;
   padding: 0px 8px;
   ${({ darkMode }) => (darkMode ? `color: #A8AAb3` : "")}
   & .ant-avatar{
       margin-top: 13px;
       svg{
           margin-top: 5px;
       }
   }
 }
 .message .ant-badge-dot{
   background: green;
 }

 .ant-badge{
   margin-top: 20px !important;
   .ant-badge-dot{
     right:50% !important  
 }}
.message, .notification, .settings, .support, .flag-select, .nav-author{
   display: flex;
   span, a {
       display : block;
       line-height: normal;
       margin: 0 3px;
   } 
}
.nav-author{
    a.ant-dropdown-trigger{
        img{
            max-width: 20px;
        }
    }
}
`;

const AtbdTopDropdwon = Styled.div`
.notification-icon{
    .ant-avatar{
        svg{
            margin-left:-10px;
        }
    }
}
.atbd-top-dropdwon__title .title-text{
    ${({ theme }) => (!theme.rtl ? "margin-right" : "margin-left")}: 10px;
     
    font-weight: bold;
    font-size: 16px
}
.atbd-top-dropdwon__content figcaption .atbd-top-dropdwonText{
    min-width: 216px;
    ${({ theme }) => (!theme.rtl ? "margin-right" : "margin-left")}:15px;
}
.atbd-top-dropdwon__content .notification-icon{
    width: 39.2px;
    height: 32px;
    ${({ theme }) => (!theme.rtl ? "margin-right" : "margin-left")}: 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center
}
.atbd-top-dropdwon__content .notification-icon.bg-primary {
        background: #5F63F215;
        color: #5F63F2;
    }
    .atbd-top-dropdwon__content .notification-icon.bg-secondary {
        background: #FF69A515;
        color: #FF69A5;
    }
    .atbd-top-dropdwon__content .notification-icon svg {
        width: 18px;
        height: 18px;
    }
    .atbd-top-dropdwon__content .notification-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }  

    .atbd-top-dropdwon__content figcaption span {
        ${({ theme }) => (theme.rtl ? "padding-right" : "padding-left")}: 0;
    }

    .notification-text h1 {
        font-size: 14px;
        font-weight: 400;
        color: #5A5F7D;
        margin-bottom: 4px;
    }

    .notification-text h1 span {
        color: #5F63F2;
        font-weight: 500;
        ${({ theme }) => (theme.rtl ? "padding-right" : "padding-left")}: 0;
    }

    .notification-text p {
        font-size: 12px;
        color: #ADB4D2;
        margin-bottom: 0;
        text-align: ${({ theme }) => (!theme.rtl ? "left" : "right")}
    }
  
    
`;

const NestedDropdwon = Styled.div`
.support-dropdwon{
    padding: 5px 5px ;
    text-align: ${({ theme }) => (!theme.rtl ? "left" : "right")};
    ul{
        list-style:none;
        margin: 0px !important;
        padding-left:0px;
        &:not(:last-child){
            margin-bottom: 16px;
        }
        h1{
            font-size: 14px;
            font-weight: 400;
            color: ${({ theme }) => theme["light-color"]};
        }
        li{
            a{
                font-weight: 500;
                padding: 4px 16px;
                color: ${({ theme }) => theme["dark-color"]};
                &:hover{
                    background: #eeee;
                    color: ${({ theme }) => theme["primary-color"]}
                }
            }
        }
    }
}


`;

const UserDropDwon = Styled.div`
    .user-dropdwon{
        max-width: 280px;
         
          .switch-dark{
              display: flex;
              justify-content:center;
              padding: 8px 0;
              background: #f4f5f7;
              border-radius: 10px ;
              
              button{
                  margin:0px 10px;
              }
              span{
                
                font-size: 12px;
              }
          }
        .user-dropdwon__info{
               .ant-avatar{
                ${({ theme }) =>
                  theme.rtl ? "margin-left" : "margin-right"}: 15px;
               }

            display: flex;
            align-items: flex-start;
            padding: 20px 25px;
            border-radius: 8px;
            margin-bottom: 12px;
            background: ${({ theme }) => theme["bg-color-normal"]};
            img{
                ${({ theme }) =>
                  theme.rtl ? "margin-left" : "margin-right"}: 15px;
            }
            figcaption{
                h1{
                    font-size: 14px;
                    margin-bottom: 2px;
                    color:  ${({ theme }) => theme["dark-color"]};
                }
                p{
                    margin-bottom: 0px;
                    font-size: 13px;
                    color: ${({ theme }) => theme["gray-solid"]};
                }
            }
        }
        .user-dropdwon__links{
            list-style:none;
            padding:0;
            a{
                width: calc(100% + 30px);
                left: -15px;
                right: -15px;
                display: inline-flex;
                align-items: center;
                padding: 10px 12px;
                font-size: 14px;
                transition: .3s;
                color: ${({ theme }) => theme["light-color"]};
                &:hover{
                    background: ${({ theme }) => theme["primary-color"]}05;
                    color: ${({ theme }) => theme["primary-color"]};
                    ${({ theme }) =>
                      theme.rtl ? "padding-right" : "padding-left"}: 22px;
                }
                svg{
                    width: 16px;
                    transform: ${({ theme }) =>
                      theme.rtl ? "rotateY(180deg)" : "rotateY(0deg)"};
                    ${({ theme }) =>
                      theme.rtl ? "margin-left" : "margin-right"}: 14px;
                }
            }
        }
        .user-dropdwon__bottomAction{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 500;
            text-align: center;
            position: relative;
            width: calc(100% + 30px);
            left: -15px;
            right: -15px;
            height: calc(100% + 15px);
            bottom: -15px;
            border-radius: 0 0 6px 6px;
            padding: 15px 0;
            background: ${({ theme }) => theme["bg-color-light"]};
            color: ${({ theme }) => theme["light-light"]};
            svg{
                width: 15px;
                height: 15px;
                ${({ theme }) =>
                  theme.rtl ? "margin-left" : "margin-right"}: 8px;
            }
        }
    }
`;

export { InfoWraper, AtbdTopDropdwon, NestedDropdwon, UserDropDwon };
