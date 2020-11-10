import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {AirConditionerRemoteScreen, DevicesScreen} from "../screens";
import Colors from "../constants/Colors";

const Stack = createStackNavigator<DevicesStackParamList>();

const DevicesStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'white',
                    // backgroundColor: '#f4511e',
                },
                headerTintColor: Colors.black,
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

export type DevicesStackParamList = {
    Devices: undefined;
    AirConditionerRemote: { title: string; deviceId: string; };
};

export default DevicesStackNavigator;
