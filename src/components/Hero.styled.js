import styled from 'styled-components';

export const HeroSection = styled.section`
  padding: 62px 0 104px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  padding: 0 20px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  text-align: center;

  color: #ffffff;
`;

export const HeroText = styled.p`
  margin-top: 16px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  text-align: center;

  color: #ffffff;
`;

export const HeroBtn = styled.button`
  padding: 15px 30px;
  margin-top: 24px;

  width: 175px;
  height: 57px;

  background: #28a745;
  border-radius: 5px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;
  cursor: pointer;
  border: none;
`;
