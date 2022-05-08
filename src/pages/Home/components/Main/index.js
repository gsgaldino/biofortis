import React, { useState, useEffect } from 'react';

import Provider from '~/components/Provider';
import Button from '~/components/Button';
import Typography from '~/components/Typography';

import { useModal } from '~/context/Modal';
import { useFields } from '~/context/Fields';
import text from './constants.json';

import * as S from './styles';

function Main() {
  const { open, setIsOpen } = useModal();
  const { fields } = useFields();

  const [banner, setBanner] = useState([]);
  const [background, setBackground] = useState('');

  const images = fields?.data?.banner;

  useEffect(() => {
    const formatted = images?.map((item) => item.bannerimage.url);

    setBanner(formatted);
    setBackground(formatted && formatted[0]);
  }, [images]);

  useEffect(() => {
    setTimeout(() => {
      if (background) {
        const active = banner.indexOf(background);

        setBackground(banner[active + 1] || banner[0]);
      }
    }, 30000);
  }, [background]);

  const handleButtonClick = () => setIsOpen(!open);

  return (
    <S.Banner background={background}>
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
