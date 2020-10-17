import {NavigationContainer} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import DevicesScreen from "../screens/devices/DevicesScreen";
import AuthScreen from "../screens/user/AuthScreen";
import {auth} from "firebase";
import {ActivityIndicator} from "react-native-paper";
import {View} from "react-native";

const Stack = createStackNavigator();

const MainNavigator = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const authSub = auth().onAuthStateChanged(async(user) => {
            if (user) {
                setIsLoggedIn(true);
            }else {
                setIsLoggedIn(false);
            }
            setIsLoading(false);
        });
        return () => {
            console.log('unsubscribe you moron!');
            authSub();
        };
    });

    if (isLoading) {

        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size='large'/>
        </View>;
    }

    return (
        <NavigationContainer>
            {isLoggedIn
                ?
                <Stack.Navigator>
                    <Stack.Screen name="Devices" component={DevicesScreen}/>
                </Stack.Navigator>
                : <AuthScreen/>
            }
        </NavigationContainer>
    );
};


export default MainNavigator;
