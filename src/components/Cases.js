// import { useState } from 'react';
// import { SRLWrapper } from 'simple-react-lightbox';
import {
  Container,
  CasesText,
  CasesTitle,
  CasesList,
  CasesItem,
  // ContainerLightbox,
} from './Cases.styled';
// import lightbox from 'lightbox2';
// import lightbox from '/node_modules/lightbox2/dist/css/lightbox.min.css';

// import lightbox2 from 'lightbox2';

// lightbox.option({
//   // resizeDuration: 200,
//   wrapAround: true,
//   alwaysShowNavOnTouchDevices: true,
//   disableScrolling: true,
//   maxWidth: 900,
//   maxHeight: 603,
//   fitImagesInViewport: true,

//   positionFromTop: 0,
// });

// lightbox.option({
//   'resizeDuration': 200,
//   'wrapAround': true
// })

export function Cases() {
  // const [overlay, setOverlay] = useState(false);

  // const changeOverlay = e => {
  //   if (e.target !== e.currentTarget) {
  //     setOverlay(true);
  //   }
  //   if (e.code === 'Escape' || e.currentTarget === e.target) {
  //     setOverlay(false);
  //   }
  // // };

  return (
    <Container id="cases">
      <CasesText>This is what we do</CasesText>
      <CasesTitle>Business Cases</CasesTitle>
      <CasesText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </CasesText>

      <CasesList>
        <CasesItem>
          {/* <SRLWrapper> */}

          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases1.webp')} 1x, 
    ${require('./images/cases/cases1@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases1.jpg')} 1x, 
    ${require('./images/cases/cases1@2x.jpg')} 2x`}
            />

            <img
              src={require('./images/cases/cases1.jpg')}
              alt="People at the table"
            />
          </picture>
        </CasesItem>
        <CasesItem>
          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases2.webp')} 1x, 
    ${require('./images/cases/cases2@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases2.jpg')} 1x, 
    ${require('./images/cases/cases2@2x.jpg')} 2x
  `}
            />

            <img src={require('./images/cases/cases2.jpg')} alt="Laptop" />
          </picture>
        </CasesItem>
        <CasesItem>
          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases3.webp')} 1x, 
    ${require('./images/cases/cases3@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases3.jpg')} 1x, 
    ${require('./images/cases/cases3@2x.jpg')} 2x
  `}
            />
            <img src={require('./images/cases/cases3.jpg')} alt="Notebook" />
          </picture>
        </CasesItem>
        <CasesItem>
          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases4.webp')} 1x, 
    ${require('./images/cases/cases4@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases4.jpg')} 1x, 
    ${require('./images/cases/cases4@2x.jpg')} 2x
  `}
            />
            <img src={require('./images/cases/cases4.jpg')} alt="Buildings" />
          </picture>
        </CasesItem>
        <CasesItem>
          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases5.webp')} 1x, 
    ${require('./images/cases/cases5@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases5.jpg')} 1x, 
    ${require('./images/cases/cases5@2x.jpg')} 2x
  `}
            />
            <img src={require('./images/cases/cases5.jpg')} alt="Handshake" />
          </picture>
        </CasesItem>
        <CasesItem>
          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases7.webp')} 1x, 
    ${require('./images/cases/cases7@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases7.jpg')} 1x, 
    ${require('./images/cases/cases7@2x.jpg')} 2x
  `}
            />
            <img
              src={require('./images/cases/cases7.jpg')}
              alt="Hands together"
            />
          </picture>
        </CasesItem>
        {/* </SRLWrapper> */}
      </CasesList>
      {/* <ContainerLightbox overlay={overlay}></ContainerLightbox> */}
    </Container>
  );
}
