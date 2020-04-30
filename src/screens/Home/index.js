import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import styles from './styles';

export default function Home() {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
        <View style={styles.balanceBox}>
          <Text style={styles.balanceText}>Meu saldo</Text>
          <Text style={styles.balanceValue}>R$ 0,00</Text>
        </View>
        <View style={styles.cashBox}>
        <MaterialCommunityIcons name="gift" size={30} color="#10c86e" />
        <MaterialCommunityIcons name="ticket-percent" size={30} color="#10c86e" />
        </View>
      </View>
    </View>
  );
}
