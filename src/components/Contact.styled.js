import styled from 'styled-components';
import men from './images/home/contact.jpg';

export const Wrapper = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 40px;
  }
`;

export const ImageMen = styled.div`
  min-width: 320px;
  min-height: 247px;
  background-size: cover;
  background-position: center;
  background-color: black;
  background-image: url(${men});

  @media screen and (min-width: 768px) {
    min-width: 368px;
    min-height: 352px;
    background-repeat: no-repeat;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 51px 20px 25px 20px;
  background: #f4f4f4;
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;

export const ContactTitle = styled.h2`
  margin-bottom: 69px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  color: #333333;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 54px;
  }
`;

export const ContactInput = styled.input`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  width: 280px;

  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;

  margin-bottom: 16px;
  padding: 16px 8px;

  @media screen and (min-width: 768px) {
    width: 336px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const ContactBtn = styled.button`
  margin-top: 8px;

  width: 155px;
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
