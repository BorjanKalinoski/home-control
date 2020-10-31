import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import DevicesStackNavigator from "./DevicesStackNavigator";
import ProfileScreen from "../screens/user/ProfileScreen";
import DrawerContent from "./DrawerContent";
import {useWindowDimensions} from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const dimensions = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props}/>}
            edgeWidth={dimensions.width}
            openByDefault={false}
        >
            <Drawer.Screen name='Devices' component={DevicesStackNavigator}/>
            <Drawer.Screen name='Profile' component={ProfileScreen}/>
        </Drawer.Navigator>
    );
};


export default DrawerNavigator;
