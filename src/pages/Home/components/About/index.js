import React from 'react';
import { PrismicRichText } from '@prismicio/react';

import Provider from '~/components/Provider';
import Typography from '~/components/Typography';

import aboutImg from '~/assets/about.png';
import text from './constants.json';

import { useFields } from '~/context/Fields';

import * as S from './styles';

function About() {
  const { fields } = useFields();

  return (
    <Provider id="quem-somos">
      <S.Flex>
        <div>
          <Typography color="primary" variant="h3-heavy">
            {fields?.data?.quemsomostitle[0].text}
          </Typography>
          <Typography as="div">
            <PrismicRichText field={fields?.data?.quemsomosdescription} />
          </Typography>
        </div>

        <div>
          <img src={aboutImg} alt={text.alternatives.about} />
        </div>
      </S.Flex>
    </Provider>
  );
}

export default About;
