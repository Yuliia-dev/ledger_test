import { useState } from 'react';
import { ImagesSlider } from './ImagesSlider';
import { slides } from '../helpers/slides';
import {
  Container,
  CasesText,
  CasesTitle,
  CasesList,
  CasesItem,
} from './Cases.styled';

export function Cases() {
  const [index, setIndex] = useState(null);
  const [isSlide, setIsSlide] = useState(false);
  console.log(isSlide);
  console.log(index);

  const isOpenSlider = () => {
    if (index !== null) {
      setIsSlide(true);
    }
  };
  return (
    <>
      <ImagesSlider slides={slides} indexSlider={index} isSlide={isSlide} />
      <Container id="cases">
        <CasesText>This is what we do</CasesText>
        <CasesTitle>Business Cases</CasesTitle>
        <CasesText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </CasesText>

        <CasesList>
          <CasesItem>
            <picture onClick={() => (setIndex(0), isOpenSlider())}>
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
            <picture onClick={() => (setIndex(1), isOpenSlider())}>
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
            <picture onClick={() => (setIndex(2), isOpenSlider())}>
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
            <picture onClick={() => (setIndex(3), isOpenSlider())}>
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
            <picture onClick={() => (setIndex(4), isOpenSlider())}>
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
            <picture onClick={() => (setIndex(5), isOpenSlider())}>
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
        </CasesList>
      </Container>
    </>
  );
}
