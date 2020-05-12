import React from 'react';
import {
  Container,
  Header,
  TextHelp,
  Avatar,
  NinkName,
  Name,
  LinkButton,
  LinkProfileText,
  MyAccount,
  ContainerConfig,
  ContainerConfigItems,
  Title,
  Description,
  Green,
  TitleGreen,
  Red,
  About,
} from './styles';

import avatar from '../../assets/avatar.png';

export default function Settings() {
  return (
    <Container>
      <Header>
        <TextHelp>Ajuda</TextHelp>
        <Avatar source={avatar} resizeMethod="resize" />
        <NinkName>@andrelino.silva</NinkName>
        <Name>Andrelino Silva</Name>
        <LinkButton>
          <LinkProfileText>Ver meu perfil</LinkProfileText>
        </LinkButton>
        <MyAccount>Minha conta</MyAccount>
      </Header>
      <ContainerConfig>
        <ContainerConfigItems>
          <Title>Meu PicPay</Title>
          <Description>@andrelino.silva</Description>

          <Title>Meu número</Title>
          <Description>(**) *****-0000</Description>

          <Title>Meu e-mail</Title>
          <Description>a*****z@g***l.com</Description>

          <Title>Dados pessoais</Title>
          <Description>Nome, CPF, e data de nascimento</Description>

          <Title>Conta bancária</Title>
          <Description> </Description>

          <Title>Taxas e limites</Title>
          <Description />

          <Title>Meus endereços</Title>
          <Description />

          <Title>Meus favoritos</Title>
          <Description />

          <Title>Validar identidade</Title>
          <Description>
            <Green>Verificado</Green>
          </Description>

          <Title>Meu PicPay</Title>
          <Description>@andrelino.silva</Description>
        </ContainerConfigItems>

        <TitleGreen>Promoções</TitleGreen>

        <ContainerConfigItems>
          <Title>Conta universitária</Title>
          <Description />

          <Title>Usar código promocional</Title>
          <Description />

          <Title>Convide seus amigos</Title>
          <Description />
        </ContainerConfigItems>

        <TitleGreen>Minhas assinaturas</TitleGreen>

        <ContainerConfigItems>
          <Title>Para estabelecimentos</Title>
          <Description />
        </ContainerConfigItems>

        <TitleGreen>Para o meu negócio</TitleGreen>

        <ContainerConfigItems>
          <Title>PicPay PRO</Title>
          <Description />

          <Title>Para estabelecimentos</Title>
          <Description />

          <Title>Venda por assinaturas</Title>
          <Description />
        </ContainerConfigItems>

        <TitleGreen>Configurações</TitleGreen>

        <ContainerConfigItems>
          <Title>Usar digital para pagar</Title>
          <Description />

          <Title>Alterar senha</Title>
          <Description />

          <Title>Privacidade</Title>
          <Description />

          <Title>Notificações</Title>
          <Description />

          <Title>Contas vinculadas</Title>
          <Description />
        </ContainerConfigItems>

        <TitleGreen>Geral</TitleGreen>

        <ContainerConfigItems>
          <Title>Precisa de ajuda?</Title>
          <Description />

          <Title>Sobre o PicPay</Title>
          <Description />

          <Title>Desativar minha conta</Title>
          <Description />
        </ContainerConfigItems>

        <TitleGreen />

        <ContainerConfigItems>
          <LinkButton>
            <Title>
              <Red>Sair</Red>
            </Title>
          </LinkButton>
          <About>PicPay para android v.10.18.25</About>
        </ContainerConfigItems>
      </ContainerConfig>
    </Container>
  );
}
