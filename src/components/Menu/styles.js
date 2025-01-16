import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(15, 13, 31);
  height: 60px;  
  padding-left: 20px;
  width: 100%; 
  box-sizing: border-box;  

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    height: 90px;
    padding-left: 30px; 
  }
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 12px;
  align-items: center;

  @media screen and (min-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MenuItem = styled.li`
  margin: 5px 0 0 10px;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 11.5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  svg {
    margin-right: 5px;
  }

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;

export const LanguageButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 12px 5px 0 10px;
  font-size: 20px;
  color: ${(props) => props.theme.fontColorMenu};
  cursor: pointer;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 15px 5px 0 10px;
  }

  &:hover {
    opacity: 0.7;
  }
`;
