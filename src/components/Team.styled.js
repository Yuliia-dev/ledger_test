import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  padding: 72px 20px 50px 20px;

  @media screen and (min-width: 768px) {
    padding: 50px 32px 40px 32px;
  }
`;

export const TeamText = styled.p`
  padding: 0 10px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  color: #333333;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 33px;
  }
`;

export const TeamTitle = styled.h2`
  margin: 16px 0 24px 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  text-align: center;

  color: #333333;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 54px;
  }
`;

export const TeamList = styled.ul`
  position: relative;
  margin-top: 63px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    grid-gap: 18px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TeamName = styled.h3`
  margin: 8px 0 16px 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;

  color: #333333;

  @media screen and (min-width: 768px) {
    margin: 16px 0 8px 0;
    font-size: 32px;
    line-height: 32px;
  }
`;

export const TeamLinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 25px;
  text-align: center;
`;

export const TeamSvg = styled.svg`
  fill: #ffffff;
  opacity: 1;
  :hover {
    fill: #28a745;
  }
`;

// OVERLAY

export const TeamWrapOverly = styled.div`
  position: relative;
`;

export const TeamOverlayContainer = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  &:hover {
    background: #040404;
    opacity: 0.7;
  }
`;

export const Image = styled.picture`
  opacity: 1;
  display: block;

  transition: 0.5s ease;
  backface-visibility: hidden;

  &:hover {
    opacity: 0.5;
  }
`;
