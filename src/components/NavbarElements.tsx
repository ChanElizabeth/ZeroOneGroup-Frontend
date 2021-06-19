import styled from 'styled-components';
import {SidebarItem} from '../models/SidebarItem';

// this file contain the elements of the hamburger menu, the nav, the ul (list of the menus in right side nav), the logo in the top nav bar, and the logo in right side nav

export const StyledBurger = styled.div<SidebarItem>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 28px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#000' : '#000'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
export const Nav = styled.nav`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  background-color: #FFE802;

  align-items: center;
  position: relative;

  @media (max-width: 678px) {
    width: 100vw;
  }

  span {
    font-size: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px;
      }
    }
  }

`

export const Ul = styled.ul<SidebarItem>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 90%;
  top: 0;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  height: 80px;
  margin-left: 20px;

  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    cursor: pointer;

    &:hover {
      color: #0538B6;
    }
  }

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fdfdfdfa;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;

    li {
      color: #000;
      margin-right: 34px;

      &:hover {
        color: #0538B6;
      }
    }
  }
`

export const Logo = styled.img`
  margin: 20px 50px 20px 7%;
  width: 160px;
  height: 70px;
  object-fit: contain;

  @media (max-width: 1250px) {
    margin: 20px 50px 20px 5%;
  }

`

export const LogoUl = styled.img`
  margin: 30px 50px 20px 5%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 50px;
    height: 70px;
    object-fit: contain;
  }
`