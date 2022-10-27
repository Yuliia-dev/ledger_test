import {
  Container,
  TeamText,
  TeamTitle,
  TeamList,
  TeamName,
  Image,
  TeamLinkList,
  TeamSvg,
  TeamWrapOverly,
  TeamOverlayContainer,
} from './Team.styled';
export function Team() {
  return (
    <Container>
      <TeamText>Who we are</TeamText>
      <TeamTitle>Our Professional Team</TeamTitle>
      <TeamText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </TeamText>
      <TeamList>
        <li>
          <TeamWrapOverly>
            <Image>
              <source
                srcSet={`
    ${require('./images/team/person1.webp')} 1x, 
    ${require('./images/team/person1@2x.webp')} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`
    ${require('./images/team/person1.jpg')} 1x, 
    ${require('./images/team/person1@2x.jpg')} 2x`}
              />
              <img src={require('./images/team/person1.jpg')} alt="Men" />
            </Image>
            <TeamOverlayContainer>
              <TeamLinkList>
                <li>
                  <a href="./">
                    <TeamSvg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M34.4531 17.875C34.4531 8.50977 26.8652 0.921875 17.5 0.921875C8.13477 0.921875 0.546875 8.50977 0.546875 17.875C0.546875 26.3516 6.69922 33.3926 14.834 34.623V22.7969H10.5273V17.875H14.834V14.1836C14.834 9.94531 17.3633 7.55273 21.1914 7.55273C23.1055 7.55273 25.0195 7.89453 25.0195 7.89453V12.0645H22.9004C20.7812 12.0645 20.0977 13.3633 20.0977 14.7305V17.875H24.8145L24.0625 22.7969H20.0977V34.623C28.2324 33.3926 34.4531 26.3516 34.4531 17.875Z" />
                    </TeamSvg>
                  </a>
                </li>
                <li>
                  <a href="./">
                    <TeamSvg viewBox="0 0 35 35" height="35" width="35">
                      <path d="M35.556 4.976c-1.222 0.548-2.64 0.952-4.125 1.142l-0.076 0.008c1.511-0.907 2.646-2.309 3.193-3.977l0.015-0.051c-1.331 0.803-2.879 1.415-4.529 1.748l-0.093 0.016c-1.333-1.421-3.223-2.306-5.319-2.306-4.025 0-7.287 3.263-7.287 7.287 0 0.001 0 0.003 0 0.004v-0c0 0.578 0.048 1.134 0.169 1.662-6.060-0.295-11.422-3.2-15.024-7.623-0.627 1.055-0.999 2.324-1.003 3.681v0.001c0 2.524 1.301 4.763 3.237 6.059-1.212-0.033-2.341-0.361-3.327-0.915l0.036 0.019v0.080c0.005 3.515 2.486 6.449 5.792 7.152l0.048 0.009c-0.556 0.153-1.195 0.24-1.854 0.24-0.020 0-0.040-0-0.061-0l0.003 0c-0.466 0-0.937-0.027-1.38-0.124 0.944 2.887 3.623 5.010 6.811 5.077-2.461 1.94-5.606 3.111-9.025 3.111-0.005 0-0.009 0-0.014 0h0.001c-0.020 0-0.045 0-0.069 0-0.59 0-1.172-0.038-1.743-0.11l0.068 0.007c3.14 2.051 6.986 3.271 11.116 3.271 0.023 0 0.047-0 0.070-0h-0.004c13.413 0 20.747-11.111 20.747-20.743 0-0.32-0.011-0.633-0.027-0.942 1.443-1.040 2.656-2.293 3.62-3.727l0.033-0.052z"></path>
                    </TeamSvg>
                  </a>
                </li>
                <li>
                  <a href="./">
                    <TeamSvg
                      height="35"
                      width="40"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 310 310"
                    >
                      <g id="XMLID_822_">
                        <path
                          id="XMLID_823_"
                          d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
		C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
		C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
		c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
		c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
		C204.394,157.263,202.325,160.684,199.021,162.41z"
                        />
                      </g>
                    </TeamSvg>
                  </a>
                </li>
                <li>
                  <a href="./">
                    <TeamSvg viewBox="0 0 35 35" height="35" width="35">
                      <path d="M31.992 32h0.008v-11.738c0-5.741-1.237-10.163-7.947-10.163-3.227 0-5.392 1.77-6.277 3.45h-0.093v-2.914h-6.365v21.363h6.627v-10.578c0-2.786 0.528-5.48 3.978-5.48 3.398 0 3.448 3.179 3.448 5.658v10.402h6.621zM0.528 10.635h6.635v21.365h-6.635v-21.365zM3.843 0c-2.123 0-3.843 1.721-3.843 3.843v0c0 2.12 1.722 3.878 3.843 3.878 2.12 0 3.842-1.757 3.842-3.878s-1.72-3.841-3.841-3.843h-0z"></path>
                    </TeamSvg>
                  </a>
                </li>
              </TeamLinkList>
            </TeamOverlayContainer>
          </TeamWrapOverly>
          <TeamName>John Doe</TeamName>
          <TeamText lang="en">President</TeamText>
        </li>
        <li>
          <picture>
            <source
              srcSet={`
    ${require('./images/team/person2.webp')} 1x, 
    ${require('./images/team/person2@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/team/person2.jpg')} 1x, 
    ${require('./images/team/person2@2x.jpg')} 2x
  `}
            />
            <img src={require('./images/team/person2.jpg')} alt="Women" />
          </picture>
          <TeamName>Jane Doe</TeamName>
          <TeamText lang="en">Vice President</TeamText>
        </li>
        <li>
          <picture>
            <source
              srcSet={`
    ${require('./images/team/person3.webp')} 1x, 
    ${require('./images/team/person3@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/team/person3.jpg')} 1x, 
    ${require('./images/team/person3@2x.jpg')} 2x
  `}
            />
            <img src={require('./images/team/person3.jpg')} alt="Men" />
          </picture>
          <TeamName>Steve Smith</TeamName>
          <TeamText lang="en">Marketing Head</TeamText>
        </li>
      </TeamList>
    </Container>
  );
}
