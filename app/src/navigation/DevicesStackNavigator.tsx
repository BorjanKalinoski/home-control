import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {AirConditionerRemoteScreen, DevicesScreen} from "../screens";

const Stack = createStackNavigator();

const DevicesStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Devices"
                component={DevicesScreen}
            />
            <Stack.Screen
                name="AirConditionerRemote"
                component={AirConditionerRemoteScreen}
                options={({route}) => ({title: route?.params?.title})}
            />
        </Stack.Navigator>
    );
};

export default DevicesStackNavigator;
