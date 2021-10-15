import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authentication from '../screens/Auth/index';
import { GlobalContext } from '../context/Provider';
import User from '../screens';

const Stack = createNativeStackNavigator();

function UserValidation() {
  const {
    authState:{isSignIn}
  } = useContext(GlobalContext)
  

  return (
      <NavigationContainer>
      { isSignIn ?
          <User />
        : <Authentication />
      }
      </NavigationContainer>
  );
}

export default UserValidation;