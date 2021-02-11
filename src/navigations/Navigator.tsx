import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../components/_Login';
import Home from '../components/_Home';
import SpeedRun from '../components/_SpeedRun';
import Profile from '../components/_Profile';
import SplitCreator from '../components/_SplitCreator';

type RootStackParamList = {
	Home: { };
	Login: { };
	SpeedRun: { };
	Profile: { };
	SplitCreator: { };
}

const RootStack = createStackNavigator<RootStackParamList>()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Login'>
        <RootStack.Screen 
        	name='Home' 
        	component={Home} 
        	options={{ title: 'Home Screen' }}
        />
       	{/* <RootStack.Screen 
        	name='Login' 
        	component={Login} 
        	options={{ title: 'Login Screen' }}
        />
        <RootStack.Screen 
        	name='SpeedRun' 
        	component={SpeedRun} 
        	options={{ title: 'SpeedRun Screen' }}
        />
        <RootStack.Screen 
        	name='Profile' 
        	component={Profile} 
        	options={{ title: 'Profile Screen' }}
        />
        <RootStack.Screen 
        	name='SplitCreator' 
        	component={SplitCreator} 
        	options={{ title: 'SplitCreator Screen' }}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer>
    )
}

export default MainStackNavigator
