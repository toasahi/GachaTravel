import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import BCapsule from 'src/assets/svg/Bcapsule.svg';
import RCapsule from 'src/assets/svg/Rcapsule.svg';
import YCapsule from 'src/assets/svg/Ycapsule.svg';
import GCapsule from 'src/assets/svg/Gcapsule.svg';
import OBCapsule from 'src/assets/svg/OBcapsule.svg';
import ORCapsule from 'src/assets/svg/ORcapsule.svg';
import OYCapsule from 'src/assets/svg/OYcapsule.svg';
import OGCapsule from 'src/assets/svg/OGcapsule.svg';
import SecondaryButton from 'src/assets/svg/SecondaryButton.svg';
import CollectionFrame from 'src/assets/svg/collectionFrame.svg';

export const GachaFrame = memo((props) => {
  const { color, status, prefecture, plan, people, prefectureId } = props;
  const navigation = useNavigation();
  const capsuleStatus = status === 'Before' ? false : true;
  const capsuleComponents = {
    R: capsuleStatus ? ORCapsule : RCapsule,
    G: capsuleStatus ? OGCapsule : GCapsule,
    B: capsuleStatus ? OBCapsule : BCapsule,
    Y: capsuleStatus ? OYCapsule : YCapsule,
  };

  const Capsule = capsuleComponents[color];

  return (
    <View>
      <CollectionFrame style={styles.collectionFrame} />
      <View style={styles.detail}>
        <Capsule style={{ marginTop: 10 }} />
        <View style={{ marginLeft: 60 }}>
          <Text style={styles.planText}>{plan}</Text>
          <View style={{ flexDirection: 'row', marginTop: 11, marginLeft: 15 }}>
            <Text style={styles.textPrefecture}>{prefecture}</Text>
            <Text style={styles.textPeople}>{people}</Text>
          </View>
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate('GachaResultDetail', {
                name: plan,
                plan: plan,
                id: prefectureId,
                color: color,
                status: capsuleStatus,
                prefecture: prefecture,
                people: people,
              })
            }
          >
            <SecondaryButton />
            <Text style={styles.buttonText}>詳細を見る</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  collectionFrame: {
    marginTop: 20,
    position: 'relative',
  },

  detail: {
    position: 'absolute',
    top: 35,
    left: 69,
    flexDirection: 'row',
  },

  button: {
    width: 120,
    height: 60,
    position: 'relative',
    marginTop: 10,
  },

  buttonText: {
    color: '#322400',
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontSize: 13,
    position: 'absolute',
    top: 11,
    left: 25,
  },

  planText: {
    color: '#67533A',
    fontWeight: 'bold',
    fontSize: 16,
  },

  textPrefecture: {
    color: '#A6A18D',
    fontWeight: 'bold',
    fontSize: 11,
  },

  textPeople: {
    color: '#A6A18D',
    fontWeight: 'bold',
    fontSize: 11,
    marginLeft: 55,
  },
});
