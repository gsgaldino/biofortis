import React from 'react';
import PropTypes from 'prop-types';

import plant from '~/assets/isotipo.svg';
import Typography from '../Typography';

import { useModal } from '~/context/ProductModal';

import * as S from './styles';

function Card({ name, description }) {
  const {
    setProduct,
    setIsOpen,
  } = useModal();

  const handleCardClick = () => {
    setProduct({ name, description });
    setIsOpen(true);
  };

  return (
    <S.Card onClick={handleCardClick}>
      <img src={plant} alt="foo" />
      <Typography color="primary" variant="h4-heavy">{name}</Typography>
      <Typography>{description}</Typography>
    </S.Card>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  name: '',
  description: '',
};

export default Card;
