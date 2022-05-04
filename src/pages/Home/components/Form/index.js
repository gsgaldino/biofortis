import React from 'react';
import { Checkbox, Input } from '@chakra-ui/react';

import Provider from '~/components/Provider';
import Typography from '~/components/Typography';
import Button from '~/components/Button';

import * as S from './styles';

Input.defaultProps = {
  ...Input.defaultProps,
  focusBorderColor: 'green.500',
  borderColor: 'rgba(0,0,0,.1)',
};

function Form() {
  return (
    <Provider>
      <S.Container>
        <div>
          <Typography color="primary" variant="h3-heavy">
            Entre em contato conosco, ficaremos felizes em te atender.
          </Typography>
          <Typography as="small">
            Deixe seu e-mail e nós entraremos em contato:
          </Typography>
        </div>

        <S.Form>
          <Input placeholder="Nome" type="text" />
          <Input placeholder="E-mail" type="email" />
          <S.InputWrapper>
            <Input placeholder="Telefone" type="email" />
            <Button w="50%">Enviar</Button>
          </S.InputWrapper>

          <Checkbox
            size="md"
            colorScheme="green"
            borderColor="rgba(0,0,0,.1)"
            color="var(--text-dark)"
          >
            Li e concordo com a
            {' '}
            <Button variant="link">política de privacidade</Button>
          </Checkbox>
        </S.Form>
      </S.Container>
    </Provider>
  );
}

export default Form;
