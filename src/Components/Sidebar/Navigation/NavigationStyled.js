import styled from "styled-components";

export const NavigationStyled = styled.div`
  padding: 15px;
  width: fit-content;
  
  .navList {
    list-style: none;
  }

  .navItem {
    margin-bottom: 30px;
    width: fit-content;

    :last-child {
      margin-bottom: 0;
    }
  }

  .navItemLink {
    text-decoration: none;
    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: #DFE8FF;
    display: flex;
    align-items: center;
  }

  .iconSpan {
    margin-right: 15px;
  }

  .active {
    position: relative;
    color: rgba(137, 150, 184, 0.6);

    :after {
      position: absolute;
      display: block;
      content: '';
      background-color: rgba(223, 232, 255, 0.49);
      width: 100%;
      height: 2px;
      bottom: -9px;
      border-radius: 30px;
    }
  }
`;
