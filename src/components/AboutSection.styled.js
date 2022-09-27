import styled from 'styled-components';
import people from './images/home/people.jpg';

export const Wrapper = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 80px 20px;
  background: #28a745;
`;

export const ImagePeople = styled.div`
  min-width: 320px;
  min-height: 220px;
  background-size: cover;
  background-position: center;
  background-color: black;
  background-image: url(${people});

  @media screen and (min-width: 768px) {
    min-width: 368px;
    min-height: 589px;
    background-repeat: no-repeat;
  }
`;

export const TextAbout = styled.p`
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

export const TitleAbout = styled.h2`
  margin: 16px 0 24px 0;
  padding-right: 20px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;

  color: #ffffff;
  @media screen and (min-width: 768px) {
    padding-right: 100px;
    font-size: 40px;
    line-height: 48px;
  }
`;

export const AboutBtn = styled.button`
  margin-top: 24px;

  width: 146px;
  height: 54px;

  background: #28a745;
  border: 1px solid #ffffff;
  border-radius: 5px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;
  cursor: pointer;
`;
