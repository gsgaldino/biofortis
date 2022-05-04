import React from 'react';

import Provider from '~/components/Provider';
import Typography from '~/components/Typography';
import Card from '~/components/Card';

import * as S from './styles';

function Products() {
  const cards = [
    {
      name: 'Nitruran 32',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing magnis in morbi amet sed egestas hendrerit.',
    },
    {
      name: 'KCL',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing magnis in morbi amet sed egestas hendrerit.',
    },
    {
      name: 'MAP',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing magnis in morbi amet sed egestas hendrerit.',
    },
    {
      name: 'NPro Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing magnis in morbi amet sed egestas hendrerit.',
    },
  ];

  return (
    <S.Container id="produtos">
      <Provider>
        <S.Title>
          <Typography color="primary" variant="h3-heavy">Conheça nossos produtos</Typography>
        </S.Title>

        <S.Cards>
          {cards.map((card) => (
            <div key={card.name}>
              <Card name={card.name} description={card.description} />
            </div>
          ))}
        </S.Cards>
      </Provider>
    </S.Container>
  );
}

export default Products;
