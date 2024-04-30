/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

import {

  View,
} from 'react-native';
import Login from './Screen/Login';
import { AuthContext } from './utils/AuthContext';
import Home from './Screen/Home';
import Services from './utils/Services';


const Stack = createNativeStackNavigator();

function App() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {

    Services.getUserAuth().then(res => {
      console.log("User data from storage:", res);
      if (res) {
        setUserData(res);
      } else {
        // Handle case when user data is not available in storage
        setUserData(null)
      }
    })

  }, [])


  return (
    <>
      <AuthContext.Provider
        value={{ userData, setUserData }}
      >
        <NavigationContainer>
          {
            userData ? (
              <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
              </Stack.Navigator>
            ) : (
              <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              </Stack.Navigator>
            )
          }

        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}




export default App;
