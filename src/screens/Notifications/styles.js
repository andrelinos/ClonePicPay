import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  background: #1e232a;
  padding: 15px;
`;

export const Header = styled.View`
  background: #1e232a;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
`;

export const Notification = styled.Text `
  font-weight: 700;
  color: #fff;
  font-size: 18px;
`;

export const ConfigButton = styled.TouchableOpacity`
`;

export const ConfigText = styled.Text `
  color: #10c86e;
  font-size: 16px;
`;

export const Card = styled.View `
  flex-direction: row;
  height: 60px;
`;

export const Title = styled.Text `
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

export const Name = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-top: 5px;
  font-weight: 700;
`;

export const Information = styled.Text`
  color: #eee;
  font-size: 12px;
  font-weight: normal;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;

export const Date = styled.Text`
  color: #fff;
  font-size: 11px;
`;

export const ButtonFollow = styled.TouchableOpacity`
  width: 100px;
  height: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-width: 1px;
  border-color: #10c86e;
  border-radius: 15px;
`;

export const ImgFollow = styled.Text``;

export const TextFollow = styled.Text `
  color: #fff;
  font-size: 11px;
  margin-left: 5px;
  color: #10c86e;
`;
