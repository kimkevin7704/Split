import React from 'react'
import { Text, Button } from "react-native"
import { Center } from '../components/Center'
import { NavigationContainer } from "@react-navigation/native";

interface LoginProps {

}

export const Login: React.FC<LoginProps> = ({navigation}) => {
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