import React from 'react';
import { DiFirebase, DiGit, DiMootools, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
      I've worked with a range of technologies in the web development world.From Front-end to Backend
      </SectionText>
    <List>
      <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js
        </ListParagraph>
      </ListContainer>
      </ListItem>
      <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node and Database
        </ListParagraph>
      </ListContainer>
      </ListItem>
      <ListItem>
      <DiZend size="3rem" />
      <ListContainer>
        <ListTitle>UX/UI</ListTitle>
        <ListParagraph>
          Experience with <br />
          tools like Figma
        </ListParagraph>
      </ListContainer>
      </ListItem>
    </List>
 </Section>
);

export default Technologies;
