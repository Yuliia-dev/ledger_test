import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  padding: 56px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 48px 32px 40px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 28px;
  }
`;

export const CasesText = styled.p`
  padding: 0 37px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  color: #333333;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const CasesTitle = styled.h2`
  margin: 16px 0 24px 0;
  padding: 0 37px;
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

export const CasesList = styled.ul`
  position: relative;
  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8px;

  @media screen and (min-width: 768px) {
    grid-gap: 18px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CasesItem = styled.li`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

// export const ContainerLightbox = styled.div`
//   position: fixed;
//   z-index: 30;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #040404;
//   opacity: 0.5;
//   /* display: none; */
//   display: ${props => (props.overlay ? 'flex' : 'none')};
// `;
