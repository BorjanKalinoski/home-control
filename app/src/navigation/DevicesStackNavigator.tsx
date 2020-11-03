import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {AirConditionerRemoteScreen, DevicesScreen} from "../screens";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

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

export default DevicesStackNavigator;
