import styled from 'styled-components';

export const Container = styled.footer`
  margin: 0 auto;
  padding: 20px;
  background: #333333;
`;

export const FooterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  text-align: center;
`;

export const FooterSvg = styled.svg`
  fill: #ffffff;
  :hover {
    fill: #28a745;
  }
`;

export const FooterText = styled.p`
  margin-top: 12px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;
