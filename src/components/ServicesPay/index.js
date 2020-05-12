import React from 'react';
import {
  Container,
  Service,
  Title,
  Img,
  Details,
  TitleService,
  Description,
  Menu,
} from './styles';

import img01 from '../../assets/01.png';
import img06 from '../../assets/06.png';
import img07 from '../../assets/07.png';
import img13 from '../../assets/13.png';

export default function ServicesPay() {
  return (
    <Container>
      <Title>Serviços</Title>
      <Service>
        <Img source={img13} />
        <Details>
          <TitleService>Pagar nas maquinihas</TitleService>
          <Description>
            Pague com PicPay em máquinas Cielo e Getnet escaneando o QR code na
            máquina
          </Description>
        </Details>
        <Menu>...</Menu>
      </Service>

      <Service>
        <Img source={img06} />
        <Details>
          <TitleService>Pagar Conta</TitleService>
          <Description>
            Pague sua conta de luz, água, boletos bancários, etc.
          </Description>
        </Details>
        <Menu>...</Menu>
      </Service>

      <Service>
        <Img source={img07} />
        <Details>
          <TitleService>Cobrar</TitleService>
          <Description>Cobre um amigo</Description>
        </Details>
        <Menu>...</Menu>
      </Service>

      <Service>
        <Img source={img01} />
        <Details>
          <TitleService>Recarga de Celular</TitleService>
          <Description>
            Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios
          </Description>
        </Details>
        <Menu>...</Menu>
      </Service>
    </Container>
  );
}
