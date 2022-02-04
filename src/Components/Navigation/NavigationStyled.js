import styled from "styled-components";

export const NavigationStyled = styled.div`
  .burgerOpenBtn {
    background-image: url("../../image/svg/open-menu.svg");
    background-position: center;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    border: none;
    background-color: transparent;
  }
  .burgerCloseBtn {
    background-image: url("../../image/svg/close-menu.svg");
    background-position: center;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    border: none;
    background-color: transparent;
  }

  .burgerModalWrapperOpen {
    position: absolute;
    top: 80px;
    left: 69px;
    bottom: 0px;
    z-index: 293;
    display: block;
    max-width: 100%;
    margin-top: 0px;
    padding-right: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
    background-color: rgb(38, 64, 97);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    transform: translateX(0px);
  }
  .burgerModalWrapperClose {
    position: absolute;
    top: 80px;
    right: 0px;
    bottom: 0px;
    z-index: 293;
    display: block;
    width: 1280px;
    max-width: 100%;
    margin-top: 0px;
    padding-right: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
    background-color: rgb(38, 64, 97);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    transform: translateX(-100%);
  }
  .burgerList {
    padding-top: 64px;
  }
  .navItem {
    margin-bottom: 33px;
    display: block;
  }
  .navItem:last-child {
    margin-bottom: 0;
  }
  .navItem:first-child {
    display: none;
  }
  .navItemLink {
    display: block;
    text-align: center;
    max-width: 100%;
    background-position: 88% 50%;
    background-size: 36px;
    background-repeat: no-repeat;
    transition: background-position 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    text-decoration: none;
    color: #9b9faa;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 700;
    font-family: Verdana;
  }

  .activ {
    color: #fff;
  }
`;
