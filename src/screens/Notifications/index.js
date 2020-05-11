import React from 'react';
import { AntDesign } from '@expo/vector-icons'

import {
  Container,
  Card,
  Header,
  Notification,
  ConfigButton,
  ConfigText,
  Img,
  Details,
  Information,
  Name,
  Footer,
  Date,
  ButtonFollow,
  ImgFollow,
  TextFollow
} from './styles';

import img15 from '../../assets/15.png';
import img18 from '../../assets/18.png';
import img19 from '../../assets/19.png';
import img21 from '../../assets/21.png';
import img22 from '../../assets/22.png';


const items = [
  {
    key: String(Math.random()),
    img: img15,
    nickname: '@AndrelinoSilva',
    name: 'Andrelino',
    date: '21 de abril às 05:15'
  },
  {
    key: String(Math.random()),
    img: img19,
    nickname: '@MariaName',
    name: 'Maria Emília',
    date: '26 de mai às 18:15'
  },
  {
    key: String(Math.random()),
    img: img21,
    nickname: '@MarioBross',
    name: 'Super Mário',
    date: '18 de mai às 10:58'
  },
  {
    key: String(Math.random()),
    img: img18,
    nickname: '@DiegoFernandes',
    name: 'Diego Fernandes',
    date: '26 de mai às 18:15'
  },
  {
    key: String(Math.random()),
    img: img15,
    nickname: '@DiegoFernandes',
    name: 'Diego Fernandes',
    date: '26 de mai às 18:15'
  },
  {
    key: String(Math.random()),
    img: img15,
    nickname: '@MaykBritos',
    name: 'Mayk Brito',
    date: '26 de mai às 18:15'
  },

];

export default function Notifications() {
  return (
    <>
    <Header>
      <Notification>Notificações</Notification>
      <ConfigButton>
        <ConfigText>Configurar</ConfigText>
      </ConfigButton>
    </Header>
      <Container>
        {items.map((item) => (
          <>

          <Card key={item.key}>
            <Img source={item.img} />
            <Details>
              <Name>{item.name}{' '}
              <Information>
                entrou no PicPay como {item.nickname}! Agora, vocês podem enviar
                ou receber dinheiro entre si pelo smartphone gratuitamente.
              </Information>
              </Name>

            </Details>

          </Card>
          <Footer>
              <Date>{item.date}</Date>
              <ButtonFollow>
                <ImgFollow> <AntDesign name="addusergroup" size={16} color="#10c86e"></AntDesign> </ImgFollow>
              <TextFollow>Seguir</TextFollow>
              </ButtonFollow>
            </Footer>
          </>
        ))}
      </Container>
    </>
  )
}
