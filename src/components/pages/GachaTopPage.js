import React, { memo } from 'react';
import Background from '../../assets/SBg.svg';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from '../Inputs/CustomButton';
import Coin from '../../assets/coin.svg';
import Setting from '../../assets/setting.svg';
import ButtonSvg from '../../assets/Button.svg';

export const GachaTopPage = memo((props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Background />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', top: 80, right: 20 }}>
        <TouchableOpacity>
          <Setting />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', top: 190, left: 15 }}>
        <Coin />
        <Text style={{ position: 'absolute', left: 30, fontWeight: 'bold', fontSize: 18, top: 2 }}>5000</Text>
      </View>
      <View style={[styles.form, styles[`form_${Platform.OS}`]]}>
        <CustomButton text="START" onPress={() => navigation.navigate('SettingGacha')} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  form: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 85,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});