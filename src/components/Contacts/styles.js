import styled from 'styled-components/native';

export const Container = styled.View`
  background: #1e232a;
  padding: 15px;
  margin-bottom: 60px;
`;

export const Card = styled.View`
  flex-direction: row;
  height: 60px;
`;

export const Title = styled.Text`
  background: #1e232a;
  width: 100%;
  color: #fff;
  text-align: left;
  padding-left: 15px;
`;

export const Img = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #1e232a;
  border-width: 1px;
  border-color: #57606f;
`;

export const Details = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const NickName = styled.Text`
  color: #fff;
  font-size: 11px;
`;

export const Name = styled.Text`
  color: #999;
  font-size: 10px;
  margin-top: 5px;
`;

export const Menu = styled.Text`
  color: #fff;
  transform: rotate(90deg);
  font-size: 18px;
`;
