import React from 'react';

import Provider from '~/components/Provider';
import Typography from '~/components/Typography';

import aboutImg from '~/assets/about.png';
import text from './constants.json';

import * as S from './styles';

function About() {
  return (
    <Provider id="quem-somos">
      <S.Flex>
        <div>
          <Typography color="primary" variant="h3-heavy">{text.title}</Typography>
          <Typography>{text.description}</Typography>
        </div>

        <div>
          <img src={aboutImg} alt={text.alternatives.about} />
        </div>
      </S.Flex>
    </Provider>
  );
}

export default About;
