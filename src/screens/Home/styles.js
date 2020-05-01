import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const PaymentedContainer = styled.View`
  margin: 0 15px 25px;
  padding: 15px;
  background: #1e232a;
  border-radius: 8px;
`;

export const PaymentedDescription = styled.View`
  flex-direction: row;
  align-items: center;

`;
export const PaymentedImg = styled.Image`
  width: 42px;
`;

export const PaymentedLabel = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 10px;
`;

export const PaymentedFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #f75175;
  font-size: 12px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 1px;
  height: 13px;
  background: rgba(255, 255, 255, 0.4);
  margin: 0 10px;
`;

export const Date = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  margin-left: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
`;

export const OptionLabel = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 5px;
`;
