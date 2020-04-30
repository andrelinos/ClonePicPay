import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#000',
  },
  header: {
    height: 50,
    paddingTop: 0,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceText: {
    color: '#fff',
    fontSize: 12,
  },
  balanceValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cashBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
