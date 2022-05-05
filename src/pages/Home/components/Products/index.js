import React from 'react';

import Provider from '~/components/Provider';
import Typography from '~/components/Typography';
import Card from '~/components/Card';

import { useFields } from '~/context/Fields';

import * as S from './styles';

function Products() {
  const { fields } = useFields();
  const products = fields?.data?.produtos;

  return (
    <S.Container id="produtos">
      <Provider>
        <S.Title>
          <Typography color="primary" variant="h3-heavy">Conheça nossos produtos</Typography>
        </S.Title>

        <S.Cards>
          {products && products.map((prod) => (
            <div key={prod.producttitle[0].text}>
              <Card
                name={prod.producttitle[0].text}
                description={prod.productdescription}
                image={prod.productimage.url}
              />
            </div>
          ))}
        </S.Cards>
      </Provider>
    </S.Container>
  );
}

export default Products;
