import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import ModalProvider from './context/Modal';
import ProductModalProvider from './context/ProductModal';

import Routes from './routes';
import GlobalStyles from './styles/globals';

const theme = extendTheme({
  colors: {
    green: {
      500: '#436A3B',
      600: '#67a35b',
      700: '#33512d',
    },
  },
  shadows: {
    outline: '0 0 0 3px var(--chakra-colors-green-500)',
  },
  components: {
    Input: {
      sizes: {
        md: {
          field: {
            borderRadius: 'none',
          },
        },
      },
    },
    Button: {
      sizes: {
        md: {
          borderRadius: 'none',
        },
      },
    },
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <ModalProvider>
        <ProductModalProvider>
          <Routes />
        </ProductModalProvider>
        <GlobalStyles />
      </ModalProvider>
    </ChakraProvider>
  );
}
