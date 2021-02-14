import React, { useState, useEffect, useContext } from 'react'
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { Center } from '../components/Center';
import { AuthNavProps, AuthParamList } from '../AuthParamList';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from '../AuthProvider';

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
    const { login } = useContext(AuthContext)
    return(
        <Center>
            <Text>route name: {route.name}</Text>
            <Button
                title="go to HOME"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
            <Button
                title="LOGIN"
                onPress={() => {
                    login();
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
    //when booting up, check if user is logged in
    //user is hard coded in for now
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //check if user is logged in or not
        AsyncStorage.getItem('user')
            .then(userString => {
                if (userString) {
                    //login function in AuthProvider
                    login();
                } 
                setLoading(false);
                console.log(userString);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        console.log('wow');
        return (
        <Center>
            <ActivityIndicator size="large" />
        </Center>
        );
    }

    //if user is detected, show 'you exist'
    return(
        <NavigationContainer>
            {user ? 
                <Center>
                    <Text>you exist</Text>
                </Center> : 
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Login' 
                            options={{
                                header: () => null
                            }}
                            component={Login} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>}
        </NavigationContainer>
    );
}
