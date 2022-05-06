import React, { forwardRef } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const Button = forwardRef(({ children, isLoading, ...rest }, ref) => (
  <ChakraButton ref={ref} colorScheme="green" {...rest} isLoading={isLoading}>
    {children}
  </ChakraButton>
));

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
};

export default Button;
