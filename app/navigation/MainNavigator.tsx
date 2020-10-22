import React, {useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import {Text,ActivityIndicator} from "react-native-paper";
import {firebase} from '../firebase/config';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import DevicesScreen from "../screens/devices/DevicesScreen";
import AuthScreen from "../screens/user/AuthScreen";
import AcRemoteScreen from "../screens/devices/AcRemoteScreen";

const Stack = createStackNavigator();

const MainNavigator = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const authSub = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setIsLoading(false);
        });
        return () => {
            authSub();
        };
    });

    if (isLoading) {
        return <View style={styles.center}>
            <Text>kur</Text>
            <ActivityIndicator size='large'/>
        </View>;
    }

    return (
        <NavigationContainer>
            {isLoggedIn
                ?
                <Stack.Navigator>
                    <Stack.Screen name="Devices" component={DevicesScreen}/>
                    <Stack.Screen
                        name="AcRemoteScreen"
                        component={AcRemoteScreen}
                        options={({ route }) => ({ title: route.params.name })}/>
                </Stack.Navigator>
                : <AuthScreen/>
            }
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MainNavigator;
