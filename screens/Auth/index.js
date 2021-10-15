import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './SignIn'
import Wellcome from '../Wellcome'
import SignUp from './SignUp'

export default Authentication = () => {
    const AuthStack = createStackNavigator()
    return (
        <AuthStack.Navigator 
            screenOptions={{headerShown:false}}
            initialRouteName="welcome"
        >
            <AuthStack.Screen name={'signin'} component={SignIn} />
            <AuthStack.Screen name={'signup'} component={SignUp} />
            <AuthStack.Screen name={'welcome'} component={Wellcome} />
        </AuthStack.Navigator> 
    )
}
