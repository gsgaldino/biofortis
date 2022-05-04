import React, { forwardRef } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const Button = forwardRef(({ children, ...rest }, ref) => (
  <ChakraButton ref={ref} colorScheme="green" {...rest}>
    {children}
  </ChakraButton>
));

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
