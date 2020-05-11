import styled from 'styled-components/native';

export const Container = styled.View`
  background: #eee;
`;

export const ContainerItems = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))``;

export const Header = styled.View`
  flex-direction: row;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  background: #1e232a;
`;

export const SearchContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 36px;
  background: #ddd;
  margin-left: 8px;
  padding: 0 5px;
  border-radius: 16px;
  border-width: 0.6px;
  border-color: rgba(144,144,144,0.8);
`;

export const Search = styled.TextInput.attrs({
  placeholderTextColor: "rgba(144,144,144,0.8)",
})`
  flex: 1;
  height: 34px;
  margin-left: 8px;
`;

export const IconSearchPay = styled.View``;
export const PaymentedImg = styled.Image`
  width: 42px;
`;
