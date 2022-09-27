import styled from 'styled-components';
import banner from './components/images/home/showcase.jpg';

// export const Container = styled.div`
//   margin: 0 auto;
//   padding: 0 20px;

//   @media screen and (min-width: 320px) {
//   width: 320px;
//   }

//   @media screen and (min-width: 768px) {
//     width: 768px;
//   }

//   @media screen and (min-width: 1360px) {
//     width: 1360px;
//   }
// `;

export const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${banner});
`;
