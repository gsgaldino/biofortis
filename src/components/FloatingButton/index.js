import React from 'react';
import { Tooltip } from '@chakra-ui/react';

import smile from '~/assets/smile.png';
import * as S from './styles';

function FloatingButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511988888888&text=Ol%C3%A1"
      target="_blank"
      rel="noreferrer"
    >
      <Tooltip
        m={2}
        label="Fale com um atendente!"
        placement="left"
        bg="var(--primary-1)"
        hasArrow
      >
        <S.Floating>
          <img src={smile} alt="" />
        </S.Floating>
      </Tooltip>
    </a>
  );
}

export default FloatingButton;
