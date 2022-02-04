import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: absolute;
  height: 90%;
  background-color: #091227;
  transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  transform: ${({isShow}) => isShow ? 'translateX(0px)' :  'translateX(-100%)'} ;
  opacity: ${({isShow}) => isShow ? 1 :  0};
  z-index:1;
  }
`