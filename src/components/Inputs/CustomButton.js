import React, { memo } from 'react';
import { TextInput, StyleSheet, View, Text, Pressable } from 'react-native';

export const CustomButton = memo((props) => {
  const { text, onPress, type = 'PRIMARY', isVisible = true } = props;
  return (
    <Pressable
      style={[styles.container, isVisible ? styles[`container_${type}`] : styles[`container_TERTIARY`]]}
      onPress={onPress}
      disabled={!isVisible}
    >
      <Text style={[styles.text, isVisible ? styles[`text_${type}`] : styles[`text_TERTIARY`]]}>{text}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
  },

  container_PRIMARY: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#F13C31',
    shadowColor: '#AD150C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },

  container_TERTIARY: {
    backgroundColor: '#E2E2E2',
    marginVertical: 5,
    width: '100%',
    shadowColor: '#B3B3B3',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  text_PRIMARY: {
    color: '#FFFFFF',
  },
  text_TERTIARY: {
    color: '#B3B3B3',
  },
});
