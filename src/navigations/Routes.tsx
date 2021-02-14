import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { Center } from '../components/Center';


interface RoutesProps {

}

const Stack = createStackNavigator()

function Login({ navigation }) {
    return(
        <Center>
            <Text>
                YOU ARE AT LOGIN SCREEN
            </Text>
            <Button
                title="go to home"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        </Center>
    )
}

function Home({ navigation }) {
    return(
        <Center>
            <Text>
                HOME SCREEN
            </Text>
            <Button
                title="go to login"
                onPress={() => {
                    navigation.navigate('Login')
                }}
            />
        </Center>
    )
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
