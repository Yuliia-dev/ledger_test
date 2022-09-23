import styled from 'styled-components';

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
`;

export const LogoText = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;

  margin: 0 8px 0 8px;
  color: #28a745;
`;

export const NavList = styled.ul`
  margin-top: 16px;
  display: flex;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
`;

export const NavItem = styled.li`
  :not(:first-child) {
    margin-left: 12px;
  }
`;
