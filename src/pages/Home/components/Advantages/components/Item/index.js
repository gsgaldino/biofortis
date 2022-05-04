import React from 'react';
import PropTypes from 'prop-types';

import Typography from '~/components/Typography';

import * as S from './styles';

function Item({ img, description }) {
  return (
    <S.Item>
      <S.Image>
        <img src={img} alt={description} />
      </S.Image>
      <Typography color="dark" variant="h3-normal">{description}</Typography>
    </S.Item>
  );
}

Item.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;
