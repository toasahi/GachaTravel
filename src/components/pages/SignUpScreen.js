import React, { memo, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { CommonActions, useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

import { CustomInput } from 'src/components/Inputs/CustomInput';
import { CustomButton } from 'src/components/Inputs/CustomButton';

import { Validation } from 'src/validations/Validation';

import { Footer } from 'src/components/layouts/Footer';

import { GachaTravelColors } from 'src/constants/constants';

export const SignUpScreen = memo(() => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control, formState } = useForm({
    mode: 'onChange',
  });

  const onSignUpPressed = handleSubmit(async (data) => {
    try {
      if (data.password === data.confirm_password) {
        setLoading(true);
        await Auth.signUp(data.email, data.password)
          .then(() => {
            setLoading(false);
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: '認証設定', params: data.email }],
              }),
            );
          })
          .catch((e) => {
            Alert.alert('Oops', e.message);
            setLoading(false);
          });
      } else {
        Alert.alert('パスワードが異なっています', 'もう一度パスワードを入力してください');
      }
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  });

  const onSignInPress = () => {
    navigation.navigate('ログイン');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>メールアドレス</Text>
        <CustomInput
          name="email"
          placeholder={Validation.email.placeholder}
          control={control}
          rules={{
            required: Validation.email.required,
            pattern: {
              value: Validation.email.validation,
              message: Validation.email.message,
            },
          }}
        />
        <Text style={styles.text}>パスワード</Text>
        <CustomInput
          name="password"
          placeholder={Validation.password.placeholder}
          control={control}
          rules={{
            required: Validation.password.required,
            minLength: {
              value: Validation.password.minLength.value,
              message: Validation.password.minLength.message,
            },
          }}
          secureTextEntry
        />
        <Text style={styles.text}>パスワード確認</Text>
        <CustomInput
          name="confirm_password"
          placeholder={Validation.confirmPassword.placeholder}
          control={control}
          rules={{
            required: Validation.confirmPassword.required,
            minLength: {
              value: Validation.confirmPassword.minLength.value,
              message: Validation.confirmPassword.minLength.message,
            },
          }}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            text="確認コードを送信"
            onPress={handleSubmit(onSignUpPressed)}
            isVisible={formState.isValid}
            loading={loading}
          />
        </View>
        <Text style={styles.usageRecordText}>
          <Text style={styles.usageRecordSpanText}>利用規約</Text>に同意の上、アカウント登録を行ってください
        </Text>
      </View>
      <Footer text="アカウントをお持ちの方は" onPress={onSignInPress} navText="こちら" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GachaTravelColors.mainBgColor,
    alignItems: 'center',
  },
  form: {
    width: '100%',
    padding: 24,
  },

  text: {
    color: GachaTravelColors.secondaryTextColor,
    fontSize: 16,
    letterSpacing: 4,
    fontWeight: '800',
    alignItems: 'flex-start',
    marginTop: 16,
  },

  buttonContainer: {
    marginTop: 32,
  },

  usageRecordText: {
    marginTop: 32,
  },

  usageRecordSpanText: {
    color: GachaTravelColors.usageRecordTextColor,
    borderStyle: 'solid',
    textDecorationLine: 'underline',
  },
});
