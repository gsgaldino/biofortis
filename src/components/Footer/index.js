import React from 'react';

import Provider from '../Provider';
import Typography from '../Typography';
import Logo from '../Logo';

import mapMark from '~/assets/icons/map-mark.svg';

import * as S from './styles';

function Footer() {
  const links = [
    {
      text: 'Política de Privacidade',
      href: '#politica-de-privacidade',
    },
    {
      text: 'Quem Somos',
      href: '#quem-somos',
    },
    {
      text: 'Produtos',
      href: '#produtos',
    },
    {
      text: 'Vantagens',
      href: '#vantagens',
    },
  ];

  return (
    <S.Footer>
      <Provider>

        <S.Logo>
          <Logo />
        </S.Logo>

        <S.Flex>

          <div>
            <S.Address>
              <img src={mapMark} alt="ícone marcação de mapa" />
              <Typography color="dark">
                Rua Gabriel Prestes, 75 - Santana, São Paulo - SP
              </Typography>
            </S.Address>
            <Typography color="dark">CNPJ/MF: 38.947.929/0001-03</Typography>
          </div>

          <div>
            <nav>
              <ul>
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>
                      <Typography color="dark">
                        {link.text}
                      </Typography>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </S.Flex>

      </Provider>
    </S.Footer>
  );
}

export default Footer;
