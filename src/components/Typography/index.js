import React from 'react';
import PropTypes from 'prop-types';

import cc from 'classcat';

import * as S from './styles';

function Typography({
  variant,
  children,
  as,
  color,
}) {
  return (
    <S.Container as={as} className={cc([variant, color])}>
      {children}
    </S.Container>
  );
}

Typography.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  as: PropTypes.string,
  variant: PropTypes.oneOf([
    'body-default',
    'h1-normal',
    'h1-heavy',
    'h3-normal',
    'h3-heavy',
    'h4-normal',
    'h4-heavy',
  ]),
  color: PropTypes.oneOf(['light', 'dark', 'primary']),
};

Typography.defaultProps = {
  as: 'p',
  variant: 'body-default',
  color: 'dark',
  children: '',
};

export default Typography;
