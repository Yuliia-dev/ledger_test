import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 80px 20px;
  background: #28a745;
`;

export const ImagePeople = styled.img`
  /* width: 320px;
  height: 220px; */
  background-size: cover;
  background-position: center;
  /* background-repeat: no-repeat; */
  background-color: black;
`;

export const TextAbout = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
`;

export const TitleAbout = styled.h2`
  margin: 16px 0 24px 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;

  color: #ffffff;
`;

export const AboutBtn = styled.button`
  padding: 15px 30px;
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
