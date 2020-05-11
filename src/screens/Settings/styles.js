import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  background: #2f3542;
`;

export const Header = styled.View`
  background: #1e232a;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
export const TextHelp = styled.Text`
  width: 100%;
  text-align: right;
  padding-right: 10px;
  color: #10c86e;
`;
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 25px;
  margin-bottom: 15px;
`;
export const NinkName = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 2px;
`;
export const Name = styled.Text`
  color: #999;
  margin-bottom: 8px;
`;

export const LinkButton = styled.TouchableOpacity`
  color: #10c86e;
`;

export const LinkProfileText = styled.Text`
  color: #10c86e;
`;

export const MyAccount = styled.Text`
  width: 100%;
  color: #10c86e;
  text-align: left;
  margin-bottom: 10px;
`;

export const ContainerConfig = styled.View``;

export const ContainerConfigItems = styled.View`
  padding: 10px;
`;

export const Title = styled.Text`
  color: #fff;
`;

export const Description = styled.Text`
  color: #eee;
  font-size: 10px;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom-width: 0.5px;
  border-color: #999;
  border-style: solid;
`;

export const TitleGreen = styled.Text`
  margin-top: -19px;
  padding: 18px 5px 5px 10px;
  color: #10c86e;
  background: #1e272e;
  border-top-width: 1px;
  border-style: solid;
  border-color: #111;
`;
export const Green = styled.Text`
  color: #10c86e;
`;

export const Red = styled.Text`
  color: #ff5e57;
`;

export const About = styled.Text`
  color: #999;
  font-size: 12px;
  padding: 20px;
  text-align: center;
`;
