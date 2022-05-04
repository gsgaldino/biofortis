import React from 'react';

import Main from './components/Main';
import About from './components/About';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Form from './components/Form';

import * as S from './styles';

export default function Home() {
  return (
    <S.Section>

      <Main />
      <About />
      <Products />
      <Advantages />
      <Form />

    </S.Section>
  );
}
