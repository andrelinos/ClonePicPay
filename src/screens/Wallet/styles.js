import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1px;
`;

export const Value = styled.Text`
  min-width: 60px;
  font-size: 38px;
  color: #fff;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 200;
  font-weight: bold;
`;

export const BoldHide = styled.View`
  width: 75px;
  height: 4px;
  background: #fff;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 7px;
`;

export const Info = styled.Text`
  color: #f8f8f8;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 25px;
  font-weight: 100;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 25px;
`;

export const Action = styled.TouchableOpacity`
  width: 160px;
  height: 46px;
  border-width: 1px;
  border-color: #fff;
  border-radius: 23px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ActionLabel = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-left: 11px;
`;

export const UseBalance = styled.View`
  background: #1c1c1e;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;
export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentsMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;

`;

export const Card = styled.View`
  background: #1e232a;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 12px;
`;

export const CardTitle = styled.Text`
  max-width: 250px;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;
export const CardDescription = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const CardAddContainer = styled.TouchableOpacity`
  height: 55px;
  flex-direction: row;
  align-items: center;
  padding: 7px;
`;

export const CardAddIcon = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  border-width: 1px;
  border-color: rgba(255,255,255,0.7);
  justify-content: center;
  align-items: center;
`;

export const CardAddLabel = styled.Text`
  color: #1ab563;
  font-size: 20px;
  font-weight: bold;
  margin-left: 8px;
`;

export const CardImg = styled.Image`
  width: 75px;
`;

export const PromotionalCode = styled.View`
  width: 80%;
  margin: 0 auto;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

export const PromotionalCodeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PromotionalCodeLabel = styled.Text`
  color: #1ab563;
  font-size: 14px;
  margin-left: 8px;
  `;

