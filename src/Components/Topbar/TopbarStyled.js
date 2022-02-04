import styled from "styled-components";

export const TopbarWrapper = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .firstBtn,.secondBtn,.thirdBtn{
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color:rgba(137, 150, 184, 0.6);
    :hover{
      color:#EAF0FF;
    }
  }
  
  .firstBtn{}
  .secondBtn{
    margin-left: 70px;
  }
  .thirdBtn{}
`