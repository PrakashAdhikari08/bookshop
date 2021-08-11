import Styled from "styled-components";

interface StyleProps {
  darkMode?: boolean;
  hide?: boolean;
}

const Div = Styled.div<StyleProps>`
position: relative;

/* ---------------------layouts-=-------------------- */
  /* Sidebar styles 
 .ant-layout-sider{
        box-shadow: 0 0 30px #9299B810;
        @media (max-width: 991px){
            box-shadow: 0 0 10px #00000020;
        }
        &.ant-layout-sider-dark{
            background: ${({ theme }) => theme["dark-color"]};
            .ant-layout-sider-children{
                .ant-menu{
                    .ant-menu-submenu-inline{
                        > .ant-menu-submenu-title{
                            padding: 0 30px !important;
                        }
                    }
                    .ant-menu-item{
                        padding: 0 30px !important;
                    }
                }
            }
        }
         
        .ant-layout-sider-children{
            padding-bottom: 15px;
            >.sidebar-nav-title{
                margin-top: 8px;
            }

            .ant-menu{
                overflow-x: hidden;
                ${({ theme }) =>
                  theme.rtl ? "border-left" : "border-right"}: 0 none;
                .ant-menu-submenu, .ant-menu-item{
                    .feather,
                    img{
                        width: 16px;
                        font-size: 16px;
                        color: ${({ theme }) => theme["extra-light-color"]};
                    }
                    span{
                        display: inline-block;
                        color: ${({ theme }) => theme["dark-color"]};
                        transition: 0.3s ease;
                        a{
                            ${({ theme }) =>
                              !theme.rtl
                                ? "padding-left"
                                : "padding-right"}: 20px;
                        }
                    }
                    .sDash_menu-item-icon{
                        line-height: .6;
                    }
                }
                .ant-menu-submenu{
                    span{
                        ${({ theme }) =>
                          !theme.rtl ? "padding-left" : "padding-right"}: 0px;
                    }
                }
                .ant-menu-item{
                    .menuItem-iocn{
                        width: auto;
                    }
                }
  */
/* error=-============================================================ */

                /* .ant-menu-item,
                .ant-menu-submenu-title{
                    
                    a{
                        position: relative;
                    }
                    >span{
                        width: 100%;
                        .pl-0{
                            ${({ theme }) =>
                              theme.rtl
                                ? "padding-right"
                                : "padding-left"}: 0px;
                        }
                    }
                    .badge{
                        position: absolute;                        
                        ${({ theme }) => (theme.rtl ? "left" : "right")}: 30px;
                        top: 50%;
                        transform: translateY(-50%);
                        display: inline-block;
                        height: auto;
                        font-size: 10px;
                        border-radius: 3px;
                        padding: 3px 4px 4px;
                        line-height: 1;
                        letter-spacing: 1px;
                        color: #fff;
                        &.badge-primary{
                            background-color: ${({ theme }) =>
                              theme["primary-color"]};
                        }
                        &.badge-success{
                            background-color: ${({ theme }) =>
                              theme["success-color"]};
                        }
                    }
                } */



            /* ---=============================================------error------------------- */
                /* .ant-menu-submenu{
                    .ant-menu-submenu-title{
                        display: flex;
                        align-items: center;
                        .title{
                            padding-left: 0;
                        }
                        .badge{
                            ${({ theme }) =>
                              theme.rtl ? "left" : "right"}: 45px;
                        }
                    }
                }
                 .ant-menu-submenu-inline{
                    > .ant-menu-submenu-title{
                        display: flex;
                        align-items: center;
                        padding: 0 15px !important;
                        svg,
                        img{
                            width: 16px;
                            height: 16px;
                        }
                                                
                        .ant-menu-submenu-arrow{
                            right: auto;
                            ${({ theme }) =>
                              theme.rtl ? "left" : "right"}: 24px;
                            &:after,
                            &:before{
                                width: 7px;
                                background: #868EAE;
                                height: 1.25px;
                            }
                            &:before{
                                transform: rotate(45deg) ${({ theme }) =>
                                  !theme.rtl
                                    ? "translateY(-3.3px)"
                                    : "translateY(3.3px)"};
                            }
                            &:after{
                                transform: rotate(-45deg) ${({ theme }) =>
                                  theme.rtl
                                    ? "translateY(-3.3px)"
                                    : "translateY(3.3px)"};
                            }
                        }
                    } 
                     &.ant-menu-submenu-open{
                        > .ant-menu-submenu-title{
                            .ant-menu-submenu-arrow{
                                transform: translateY(2px);
                                &:before{
                                    transform: rotate(45deg) translateX(-3.3px);
                                }
                                &:after{
                                    transform: rotate(-45deg) translateX(3.3px);
                                }
                            }
                        }
                    } 
                    .ant-menu-item{
                        ${({ theme }) =>
                          theme.rtl
                            ? "padding-right"
                            : "padding-left"}: 0px !important;
                        ${({ theme }) =>
                          theme.rtl
                            ? "padding-left"
                            : "padding-right"}: 0 !important;
                        transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
                        a{
                            ${({ theme }) =>
                              theme.rtl
                                ? "padding-right"
                                : "padding-left"}: 20px !important;
                        }
                    }
                } 
                .ant-menu-item{
                    display: flex;
                    align-items: center;
                    padding: 0 15px !important;
                    &.ant-menu-item-active{
                        border-radius: 4px;
                        ${({ darkMode }) =>
                          darkMode
                            ? `background-color: rgba(255, 255, 255, .05);`
                            : ""};
                    }
                    a{
                        width: 100%;
                        display: flex !important;
                        align-items: center;
                        .feather{
                            width: 16px;
                            color: ${({ theme }) => theme["extra-light-color"]};
                        }
                        span{
                            ${({ theme }) =>
                              !theme.rtl
                                ? "padding-left"
                                : "padding-right"}: 20px;
                            display: inline-block;
                            color: ${({ theme }) => theme["dark-color"]};
                        }
                    }
                    &.ant-menu-item-selected{
                        svg,
                        i {
                            color: ${({ theme }) => theme["primary-color"]};
                        }
                    }
                } 
                 .ant-menu-submenu,
                .ant-menu-item{
                    ${({ theme }) => theme.rtl && `padding-right: 5px;`}
                    
                    &.ant-menu-item-selected{
                        border-radius: 4px;
                        &:after{
                            content: none;
                        }
                    }
                    &.ant-menu-submenu-active{
                        border-radius: 4px;
                        ${({ darkMode }) =>
                          darkMode
                            ? `background-color: rgba(255, 255, 255, .05);`
                            : ""};
                    }
                }
                .sidebar-nav-title{
                    margin-top: 40px;
                    margin-bottom: 24px;
                } 
            &.ant-menu-inline-collapsed{
                    .ant-menu-submenu{
                        text-align: ${({ theme }) =>
                          !theme.rtl
                            ? "left"
                            : "right"};                        
                        .ant-menu-submenu-title{
                            padding: 0 30px;
                            justify-content: center;
                        }
                    } 
                    .ant-menu-item{
                        padding: 0 20px !important;
                        justify-content: center;
                    }
                    /* .ant-menu-submenu, .ant-menu-item{
                        span{
                            display: none;
                        }
                    } */
                }
            }
        } */
        /* .sidebar-nav-title{
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            ${({ darkMode }) =>
              darkMode
                ? `color: rgba(255, 255, 255, .38);`
                : "color: #9299B8;"};
            padding: 0 ${({ theme }) => (theme.rtl ? "20px" : "15px")};
            display: flex;
        } */
        /* &.ant-layout-sider-collapsed{
            padding: 15px 0px 55px !important;
            .sidebar-nav-title{
                display: none;
            }
            & + .atbd-main-layout{
                ${({ theme }) =>
                  !theme.rtl ? "margin-left" : "margin-right"}: 80px;
            }
            .ant-menu-item{
                color: #333;
                .badge{
                    display: none;
                }
            } */
        }
    }
/* ----------------------layouts =------------------------------*/


.header-more{
    z-index: 2;
}

header{
    box-shadow: 0 2px 30px ${({ theme }) => theme["gray-solid"]}10;
    ${({ darkMode, theme }) =>
      darkMode ? `background: ${theme["dark-color"]};` : ""} !important ;
    z-index: 999;
    .ant-btn-link{
            ${({ darkMode }) =>
              darkMode
                ? `background: #272B41;border-color: #272B41;color: #7D808D !important`
                : ""};
        }
        .logo-class{
            height: 44px;
        }
}

 @media only screen and (max-width: 1150px){
        .ant-layout-sider.ant-layout-sider-collapsed{
            left: -80px !important;
        }

    }


.ant-layout-sider{


.sidebar-nav-title{
     color: ${({ theme, darkMode }) =>
       darkMode ? theme["light-color"] : theme["dark-color"]};
}

   box-shadow: 0 0 30px #9299B810;
   @media (max-width: 991px){
       box-shadow: 0 0 10px #00000020;
   }
  &.ant-layout-sider-dark{
      background: ${({ theme }) => theme["dark-color"]};
      .ant-layout-sider-children{
          .ant-menu{
              .ant-menu-submenu-inline{
                  > .ant-menu-submenu-title{
                      padding: 0 30px !important;
                  }
              }
              .ant-menu-item{
                  padding: 0 30px !important;
              }
          }
      }
  }

&.ant-layout-sider-collapsed{

   


    padding: 15px 0 55px !important;
    .sidebar-nav-title{
        display: none;
    }
    & + .atbd-main-layout{
        margin-left: 80px;
    }
}


}


  .atbd-main-layout{
      margin-left: 280px;
      margin-top: 64px;
      @media only screen and (max-width: 1150px){
          margin-left: auto !important;
      }
  }




`;

const SmallScreenSearch = Styled.div<StyleProps>`
        padding: 7px 0px;
        ${({ darkMode }) =>
          darkMode ? `background: #272B41;` : "background: #fff"};
        width: 100%;
        position: fixed;
        margin-top: ${({ hide }) => (hide ? "0px" : "64px")};
        top: 0;
        ${({ theme }) => (!theme.rtl ? "left" : "right")}: 0;
        transition: .3s;
        opacity: ${({ hide }) => (hide ? 0 : 1)}
        z-index: ${({ hide }) => (hide ? -1 : 999)}
        box-shadow: 0 2px 30px #9299b810;

`;

export { Div, SmallScreenSearch };
