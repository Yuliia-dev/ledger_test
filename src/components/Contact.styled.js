import styled from 'styled-components';
import men from './images/home/contact.jpg';

export const Wrapper = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 0;
  }
`;

export const FormForContact = styled.form`
  display: flex;
  flex-direction: column;
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
  @media screen and (min-width: 1360px) {
    min-width: 670px;
    min-height: 454px;
  }
`;

export const Container = styled.div`
  padding: 51px 20px 25px 20px;
  background: #f4f4f4;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 32px;
  }
  @media screen and (min-width: 768px) {
    padding: 55px 28px 77px 20px;
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

export const ContactLabel = styled.label`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

export const ContactInput = styled.input`
  position: relative;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  min-width: 280px;

  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;

  margin-bottom: 16px;
  padding: 16px 8px;

  @media screen and (min-width: 768px) {
    min-width: 336px;
    font-size: 18px;
    line-height: 25px;
  }
  @media screen and (min-width: 1360px) {
    min-width: 642px;
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
  :hover {
    background: #2ebf4f;
  }
`;
