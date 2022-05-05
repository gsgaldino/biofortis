import React from 'react';
import PropTypes from 'prop-types';
import { PrismicRichText } from '@prismicio/react';

import Typography from '../Typography';

import { useModal } from '~/context/ProductModal';

import * as S from './styles';

function Card({ name, description, image }) {
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
      <img src={image} alt="foo" />
      <Typography color="primary" variant="h4-heavy">{name}</Typography>
      <Typography as="div">
        <PrismicRichText field={description} />
      </Typography>
    </S.Card>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Card.defaultProps = {
  name: '',
  description: '',
  image: '',
};

export default Card;
