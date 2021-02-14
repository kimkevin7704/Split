import React from 'react'
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { Center } from '../components/Center';
import { AuthNavProps, AuthParamList } from '../AuthParamList';
import AsyncStorage from '@react-native-community/async-storage';

interface RoutesProps {}

/*
    KEVIN's NOTES 2/13/21

    Routes is the "App"

    Providers lets us wrap the app with stuff like User

    AuthParamList lets us control what goes in the stack navigator
        holds types for navigation and route props

    



*/

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation, route }: AuthNavProps<'Login'>) {
    return(
        <Center>
            <Text>route name: {route.name}</Text>
            <Button
                title="go to home"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        </Center>
    );
}

function Home({ navigation, route }: AuthNavProps<'Home'>) {
    return(
        <Center>
            <Text>route name: {route.name}</Text>
            <Button
                title="go to login"
                onPress={() => {
                    navigation.navigate('Login')
                }}
            />
        </Center>
    );
}

export const Routes: React.FC<RoutesProps> = ({}) => {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Login' 
                            options={{
                                header: () => null
                            }}
                            component={Login} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
