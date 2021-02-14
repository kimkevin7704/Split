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
    ==============KEVIN's NOTES 2/13/21===============

    Routes is the "App"

    App has 

    Providers lets us wrap the app with stuff 
        that we can't access within the app (User Login State)

    AuthParamList lets us control what goes in the stack navigator
        holds types for navigation and route props

    User is hard coded for now. Once user is detected,
        user will stay 'online' until restart.
        logout() in AuthProvider will remove the user entirely for now.

    login button accesses login() in AuthProvider. 
        can code backend here

    Page structure will be fixed later.
        functions Login() and Home() will be extracted
        to other page files later.
    
    ==================================================
*/

const Stack = createStackNavigator<AuthParamList>();

//navigation prop holds AuthParamList and input 'screen'
function Login({ navigation, route }: AuthNavProps<'Login'>) {
    const { login } = useContext(AuthContext)
    return(
        <Center>
            <Text>route name: {route.name}</Text>
            <Button
                title="go to HOME"
                onPress={() => {
                    //reference: AuthParamList
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
        console.log('wtf');
        AsyncStorage.getItem('user')
            .then(userString => {
                if (userString) {
                    //if user is detected...
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
    //if no user, show login page
    return(
        <NavigationContainer>
            {
            user ? 
                <Center>
                    <Text>{user.username} is signed in!</Text>
                </Center> 
            : 
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name='Login' 
                                options={{
                                    header: () => null
                                }}
                                component={Login} />
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    );
}
