import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Details } from '../components/pages/Home';
import { SignInScreen } from '../components/pages/SignInScreen';
import { SignUpScreen } from '../components/pages/SignUpScreen';
import { ConfirmSignUpPage } from '../components/pages/ConfirmSignUpPage';
import { ForgotNewPasswordPage, ForgotPasswordPage } from '../components/pages/ForgotPasswordPage';
import { LoginHome } from '../components/pages/LoginHome';
import { StyleSheet } from 'react-native';

export const Navigation = memo(() => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          animation: 'fade',
          headerStyle: {
            backgroundColor: '#F13C31',
            shadowColor: '#AD150C',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 0,
            borderBottomWidth: 0,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
          },
          headerBackTitleVisible: false,
          headerBackTitleStyle: { marginLeft: 20 },
        }}
      >
        <Stack.Screen name="loginHome" component={LoginHome} options={{ headerShown: false }} />
        <Stack.Screen name="ログイン" component={SignInScreen} />
        <Stack.Screen name="アカウント登録" component={SignUpScreen} />
        <Stack.Screen name="認証設定" component={ConfirmSignUpPage} />
        <Stack.Screen name="再設定メールの送信" component={ForgotPasswordPage} />
        <Stack.Screen name="パスワード再設定" component={ForgotNewPasswordPage} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Group>
      {/*<Stack.Screen name="Home" component={Home} />*/}
    </Stack.Navigator>
    // </NavigationContainer>
  );
});

const styles = StyleSheet.create({
  back: {
    padding: 5,
  },
});
