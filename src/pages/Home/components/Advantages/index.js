import React from 'react';

import Typography from '~/components/Typography';
import Provider from '~/components/Provider';
import Item from './components/Item';

import plant from '~/assets/icons/plant.svg';
import chart from '~/assets/icons/chart.svg';
import delivery from '~/assets/icons/delivery.svg';

import * as S from './styles';

function Advantages() {
  const items = [
    {
      img: plant,
      description: 'Fertilizantes de alta qualidade',
    },
    {
      img: chart,
      description: 'Os melhores preços do mercado',
    },
    {
      img: delivery,
      description: 'Entregas por todo o Brasil',
    },
  ];

  return (
    <S.Background id="vantagens">
      <Provider>
        <S.Title>
          <Typography variant="h3-heavy" color="dark">
            Por que contratar a
            {' '}
            <span>Biofortis</span>
            ?
          </Typography>
        </S.Title>

        <S.Flex>
          {items.map((item) => (
            <div key={item.description}>
              <Item img={item.img} description={item.description} />
            </div>
          ))}
        </S.Flex>
      </Provider>
    </S.Background>
  );
}

export default Advantages;
