import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.header`
  margin: 0 auto;
  padding: 25px 22px;
  @media screen and (min-width: 768px) {
    padding: 25px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 30px 32px;
  }
`;

export const Nav = styled.nav`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
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
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const NavList = styled.ul`
  margin-top: 16px;
  display: flex;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const NavItem = styled.li`
  :not(:first-child) {
    margin-left: 12px;
  }
`;
