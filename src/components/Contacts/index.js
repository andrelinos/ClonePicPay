import React from 'react';
import {
  Container,
  Card,
  Title,
  Img,
  Details,
  NickName,
  Name,
  Menu,
} from './styles';

import img15 from '../../assets/15.png';
import img18 from '../../assets/18.png';
import img19 from '../../assets/19.png';
import img21 from '../../assets/21.png';

const items = [
  {
    key: String(Math.random()),
    img: img15,
    nickname: '@AndrelinoSilva',
    name: 'Andrelino',
  },
  {
    key: String(Math.random()),
    img: img19,
    nickname: '@MariaName',
    name: 'Maria Emília',
  },
  {
    key: String(Math.random()),
    img: img21,
    nickname: '@MarioBross',
    name: 'Super Mário',
  },
  {
    key: String(Math.random()),
    img: img18,
    nickname: '@DiegoFernandes',
    name: 'Diego Fernandes',
  },
  {
    key: String(Math.random()),
    img: img15,
    nickname: '@DiegoFernandes',
    name: 'Diego Fernandes',
  },
  {
    key: String(Math.random()),
    img: img15,
    nickname: '@MaykBritos',
    name: 'Mayk Brito',
  },
];

export default function Contacts() {
  return (
    <>
      <Title>Contatos</Title>
      <Container>
        {items.map(item => (
          <Card key={item.key}>
            <Img source={item.img} />
            <Details>
              <NickName>{item.nickname}</NickName>
              <Name>{item.name}</Name>
            </Details>
            <Menu>...</Menu>
          </Card>
        ))}
      </Container>
    </>
  );
}
