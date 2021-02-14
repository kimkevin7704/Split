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

    Stack gets possible routes from AuthParamList



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
