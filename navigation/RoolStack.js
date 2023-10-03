

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './../screns/Login';
import Signup from './../screns/Signup';
import Welcome from './../screns/Welcome';
import { Colors } from '../src/components/styles';
const {primary,tertiary}= Colors
const Stack= createNativeStackNavigator();
const RootStack=()=>{
    return(
   <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerStyled:{
        headerBackground:'transparent'
    },
    headerTintColor:tertiary,
    headerTransparent:true,
    headerTitle:'',
    headerLetfContainerStyle:{
        paddingLeft:20
    }
     } }
     initialRouteName='Login'>
<Stack.Screen name='Login' component={Login}/>
<Stack.Screen name='Signup' component={Signup}/>
<Stack.Screen options={{headerTintColor:primary}} name='Welcome' component={Welcome}/>


    </Stack.Navigator>
   </NavigationContainer>
    )

}
export default RootStack

