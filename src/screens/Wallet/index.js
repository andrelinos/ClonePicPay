import React, { useState } from 'react';
import { Switch } from 'react-native';
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import {
  Container,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  BoldHide,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentsMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardDescription,
  CardAddContainer,
  CardAddIcon,
  CardAddLabel,
  CardImg,
  PromotionalCode,
  PromotionalCodeLabel,
  PromotionalCodeButton,
} from './styles';

import creditCard from '../../assets/credit-card.png';

export default function Wallet() {
  const [isValueVisible, setIsValueVisible] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Container>
      <Header
        colors={isEnabled ? ['#52e78c', '#1ab563'] : ['#a4b0be', '#747d8c']}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>R$</Value>
            {isValueVisible ? <Bold>0,00</Bold> : <BoldHide />}
            <EyeButton
              onPress={() =>
                setIsValueVisible(isValueVisibleValue => !isValueVisibleValue)
              }
            >
              {isValueVisible ? (
                <Feather name="eye" size={28} color="#fff" />
              ) : (
                <Feather name="eye-off" size={28} color="#fff" />
              )}
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI.</Info>

          <Actions>
            <Action>
              <Ionicons name="ios-cash" size={22} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={22} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

        <Switch
          trackColor={{ false: '#767577', true: '#9ef7ba' }}
          thumbColor={isEnabled ? '#1ab563' : '#ddd'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentsMethodsTitle>Formas de pagamento</PaymentsMethodsTitle>

        <Card>
          <CardDetails>
            <CardTitle>Cadastre seu cartão de crédito</CardTitle>
            <CardDescription>
              Cadastre um cartão de crédito para poder fazer pagamentos mesmo
              quando não tiver saldo no seu PicPay.
            </CardDescription>

            <CardAddContainer>
              <CardAddIcon>
                <Ionicons name="ios-add" size={42} color="#1ab563" />
              </CardAddIcon>
              <CardAddLabel>Adicionar cartão de crédito</CardAddLabel>
            </CardAddContainer>
          </CardDetails>
          <CardImg source={creditCard} resizeMode="contain" />
        </Card>

        <PromotionalCode>
          <PromotionalCodeButton>
            <MaterialCommunityIcons name="cash-100" size={37} color="#1ab563" />
            <PromotionalCodeLabel>Usar código promocional</PromotionalCodeLabel>
          </PromotionalCodeButton>
        </PromotionalCode>
      </PaymentMethods>
    </Container>
  );
}
