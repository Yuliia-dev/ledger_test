import styled from 'styled-components';
import coffee from './images/home/blog.jpg';

export const Wrapper = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const Container = styled.div`
  padding: 48px 20px 58px 20px;
  background: #0284d0;
  @media screen and (min-width: 768px) {
    padding: 59px 32px;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 28px;
  }
`;
export const ImageCoffee = styled.div`
  min-width: 320px;
  min-height: 247px;
  background-size: cover;
  background-position: center;
  background-color: black;
  background-image: url(${coffee});

  @media screen and (min-width: 768px) {
    min-width: 368px;
    min-height: 493px;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1360px) {
    min-width: 670px;
    min-height: 460px;
  }
`;

export const BlogText = styled.p`
  padding-right: 10px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
  @media screen and (min-width: 1360px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const BlogTitle = styled.h2`
  margin: 16px 0 24px 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;

  color: #ffffff;
  @media screen and (min-width: 1360px) {
    font-size: 40px;
    line-height: 54px;
  }
`;

export const BlogBtn = styled.button`
  margin-top: 24px;

  width: 175px;
  height: 54px;

  background: transparent;
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

  :hover {
    background: #f4f4f4;
    border-radius: 5px;
    color: #0284d0;
  }
`;
