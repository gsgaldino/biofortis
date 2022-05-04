import React from 'react';

import Provider from '~/components/Provider';
import Button from '~/components/Button';
import Typography from '~/components/Typography';

import { useModal } from '~/context/Modal';
import text from './constants.json';

import * as S from './styles';

function Main() {
  const { open, setIsOpen } = useModal();

  const handleButtonClick = () => setIsOpen(!open);

  return (
    <S.Banner>
      <Provider>
        <S.Flex>
          <div>
            <Typography color="light" variant="h3-heavy" as="h1">{text.title}</Typography>
            <Typography color="light">{text.description}</Typography>

            <Button
              onClick={handleButtonClick}
              colorScheme="green"
              w="50%"
            >
              {text.cta}
            </Button>
          </div>

          <div />
        </S.Flex>
      </Provider>
    </S.Banner>
  );
}

export default Main;
