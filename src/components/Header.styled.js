import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.header`
  margin: 0 auto;
  padding: 25px 22px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${props => props.color};

  z-index: 20;

  @media screen and (min-width: 768px) {
    padding: 25px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 30px 32px;
  }
`;

export const Nav = styled.nav`
  @media screen and (min-width: 768px) {
    margin-right: 40px;
    display: flex;
    justify-content: space-between;
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    letter-spacing: 0.03em;
    transform: scale(1.007);
  }

  @media screen and (min-width: 768px) {
    font-size: 35px;
    line-height: 48px;
  }
`;

export const LogoText = styled.span`
  margin: 0 8px 0 8px;
  color: #28a745;
  @media screen and (min-width: 768px) {
    margin: 0 10px 0 10px;
  }
`;
export const LinkNav = styled(Link)`
  padding: 3px 6px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;

  :hover {
    padding-bottom: 12px;
    border-bottom: 3px solid #28a745;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const NavList = styled.ul`
  position: relative;
  margin-top: 16px;
  display: flex;
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 1360px) {
    margin-left: 550px;
  }
`;
