import React from 'react';
import { PrismicRichText } from '@prismicio/react';

import Typography from '~/components/Typography';
import Provider from '~/components/Provider';
import Item from './components/Item';

import { useFields } from '~/context/Fields';

import * as S from './styles';

function Advantages() {
  const { fields } = useFields();

  const title = fields?.data?.advantagestitle;
  const items = fields?.data?.advantages;

  return (
    <S.Background id="vantagens">
      <Provider>
        <S.Title>
          <Typography variant="h3-heavy" color="dark" as="div">
            <PrismicRichText field={title} />
          </Typography>
        </S.Title>

        <S.Flex>
          {items && items.map((item) => (
            <div key={item.advantagetitle[0].text}>
              <Item img={item.advantageimage.url} description={item.advantagetitle[0].text} />
            </div>
          ))}
        </S.Flex>
      </Provider>
    </S.Background>
  );
}

export default Advantages;
