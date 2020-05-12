import React from 'react';

import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  PaymentedDescription,
  PaymentedImg,
  PaymentedLabel,
  PaymentedFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
  PaymentedContainer,
} from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

import img6 from '../../assets/06.png';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />

        <PaymentedContainer>
          <PaymentedDescription>
            <PaymentedImg source={img6} resizeMode="contain" />
            <PaymentedLabel>Você pagou um boleto</PaymentedLabel>
          </PaymentedDescription>
          <PaymentedFooter>
            <Details>
              <Value>R$ 59,39</Value>

              <Divider />

              <Feather name="lock" color="rgba(255, 255, 255, 0.5)" size={14} />
              <Date>há 28 dias</Date>
            </Details>

            <Actions>
              <Option>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={14}
                  color="#fff"
                />
                <OptionLabel>0</OptionLabel>
              </Option>

              <Option>
                <AntDesign name="heart" size={14} color="#1ab563" />
                <OptionLabel>1</OptionLabel>
              </Option>
            </Actions>
          </PaymentedFooter>
        </PaymentedContainer>
      </Container>
    </Wrapper>
  );
}
