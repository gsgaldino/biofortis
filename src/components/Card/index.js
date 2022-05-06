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
    setProduct({ name, description, image });
    setIsOpen(true);
  };

  return (
    <S.Card onClick={handleCardClick}>
      <div>
        <img src={image} alt="foo" />
      </div>

      <div>
        <Typography color="primary" variant="h4-heavy">{name}</Typography>
        <Typography as="div">
          <PrismicRichText field={description} />
        </Typography>
      </div>
    </S.Card>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  image: PropTypes.string,
};

Card.defaultProps = {
  name: '',
  description: '',
  image: '',
};

export default Card;
