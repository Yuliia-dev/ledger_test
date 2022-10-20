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

// OVERLAY

export const TeamDiv = styled.div`
  transition-property: transform, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:hover .client-overlay {
    transform: translateY(0%);
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const TeamLink = styled.a`
  transition-property: box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  display: block;

  &:hover,
  &:focus {
    transform: translateY(0%);
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const TeamWrapOverlay = styled.div`
  position: relative;
  /* overflow: hidden; */
`;

export const TeamOverlay = styled.p`
  transition-property: transform, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(100%);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(33, 150, 243, 0.9);
  color: #657866;

  &:hover,
  &:focus {
    transform: translateY(0%);
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
