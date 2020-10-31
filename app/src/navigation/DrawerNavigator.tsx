import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import DevicesStackNavigator from "./DevicesStackNavigator";
import ProfileScreen from "../screens/user/ProfileScreen";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
         drawerContent={props => <DrawerContent {...props}/>}

        >
            <Drawer.Screen name='Devices' component={DevicesStackNavigator}/>
            <Drawer.Screen name='Profile' component={ProfileScreen}/>
        </Drawer.Navigator>
    );
};


export default DrawerNavigator;
