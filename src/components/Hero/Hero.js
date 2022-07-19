import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Passionate towards learning new technologies and enhance my technical skills and to help other developers.
      </SectionText>
      <Button onClick={()=> window.location="https://drive.google.com/file/d/1djPRRyt2u4lXCxTEHwSj_jxpGZAShGbI/view?usp=sharing"}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;