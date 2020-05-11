import React from 'react';
import { MaterialCommunityIcons, EvilIcons, Feather, AntDesign } from '@expo/vector-icons';

import {
  Container,
  ContainerItems,
  Header,
  SearchContainer,
  Search,
  IconSearchPay,

} from './styles';

import Suggestions from '../../components/Suggestions';
import Contacts from '../../components/Contacts';
import ServicesPay from '../../components/ServicesPay';

import img6 from '../../assets/06.png';

export default function Pay() {
  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
        <SearchContainer>
          <IconSearchPay>
            <EvilIcons name="search" size={22} color="rgba(144,144,144,0.8)" />
          </IconSearchPay>
          <Search
            placeholder="A quem você quer pagar?"
          />
        </SearchContainer>

      </Header>
      <ContainerItems>
        <Suggestions />
        <ServicesPay />
        <Contacts />
      </ContainerItems>
    </Container>
  );
}
