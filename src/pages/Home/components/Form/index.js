import React, { useState, useRef } from 'react';
import { Checkbox, Input, useToast } from '@chakra-ui/react';

import Provider from '~/components/Provider';
import Typography from '~/components/Typography';
import Button from '~/components/Button';

import { sendForm } from '~/services/api';

import * as S from './styles';

Input.defaultProps = {
  ...Input.defaultProps,
  focusBorderColor: 'green.500',
  borderColor: 'rgba(0,0,0,.1)',
};

function Form() {
  const checkboxRef = useRef();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const initialState = {
    name: '',
    email: '',
    phone: '',
  };
  const [fields, setFields] = useState(initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const resetForm = () => setFields(initialState);

  const onSubmit = async () => {
    setLoading(true);

    if (!fields.name || !fields.email || !fields.phone) {
      setLoading(false);
      return toast({
        status: 'info',
        title: 'Preencha todos os campos para continuar',
        isClosable: true,
      });
    }

    if (!checkboxRef.current.checked) {
      setLoading(false);
      return toast({
        status: 'info',
        title: 'Você precisa concordar com nossa política de privacidade para continuar.',
        isClosable: true,
      });
    }

    try {
      await sendForm({
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
      });
    } catch (error) {
      console.log('error', error);
      return toast({
        status: 'error',
        title: 'Desculpe, houve um erro em nosso sistema.',
        isClosable: true,
      });
    }

    resetForm();
    setLoading(false);
    return toast({
      status: 'success',
      title: 'Enviado com sucesso!',
      isClosable: true,
    });
  };

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
          <Input
            placeholder="Nome"
            type="text"
            name="name"
            onChange={onChange}
            value={fields?.name}
          />

          <Input
            placeholder="E-mail"
            type="email"
            name="email"
            onChange={onChange}
            value={fields?.email}
          />

          <S.InputWrapper>
            <Input
              placeholder="Telefone"
              type="tel"
              name="phone"
              onChange={onChange}
              value={fields?.phone}
            />
            <Button w="50%" onClick={onSubmit} isLoading={loading}>Enviar</Button>
          </S.InputWrapper>

          <Checkbox
            size="md"
            colorScheme="green"
            borderColor="rgba(0,0,0,.1)"
            color="var(--text-dark)"
            ref={checkboxRef}
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
