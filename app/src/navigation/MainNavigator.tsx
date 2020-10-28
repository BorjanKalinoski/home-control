import React from "react";
import {useSelector} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Loading} from "../components";
import {AirConditionerRemoteScreen, DevicesScreen, AuthScreen} from "../screens";

const Stack = createStackNavigator();

const MainStackNavigator = <Stack.Navigator>
    <Stack.Screen
        name="Devices"
        component={DevicesScreen}
    />
    <Stack.Screen
        name="AirConditionerRemote"
        component={AirConditionerRemoteScreen}
        options={({route}) => ({title: route?.params?.title})}
    />
</Stack.Navigator>;

const MainNavigator = (props: any) => {
    const {isLoggedIn, isLoadingUser} = useSelector(state => state.auth);

    if (isLoadingUser) {
        return <Loading/>;
    }

    return (
        <NavigationContainer>
            {isLoggedIn
                ? MainStackNavigator
                : <AuthScreen/>
            }
        </NavigationContainer>
    );
};

export default MainNavigator;
