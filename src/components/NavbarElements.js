import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  font-family: papyrus;
  font-weight: bold;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #864f1d;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #864f1d;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: -10;
    width: 50px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  align-items: center;
  margin-right: 10px;
  display: flex;
  @media screen and (max-width: 768px) {
    position: absolute;
    
    display: ${({show})=>{
    return show ? "flex" : "none"
  }};
    top: 0;
    right: 0;
    background-color: #dbd2ca;
    flex-direction: column;
    margin-top: 90px;
    padding: 20px;
    left: 0;
    transition: all 0.3s ease;
  }
`;
