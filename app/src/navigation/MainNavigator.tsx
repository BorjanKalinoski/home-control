import React from "react";
import {useSelector} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {Loading} from "../components";
import {AuthScreen} from "../screens";
import DrawerNavigator from "./DrawerNavigator";

const MainNavigator = (props: any) => {
    const {isLoggedIn, isLoadingUser} = useSelector(state => state.auth);

    if (isLoadingUser) {
        return <Loading/>;
    }

    return (
        <NavigationContainer>
            {
                isLoggedIn
                    ? <DrawerNavigator/>
                    : <AuthScreen/>
            }
        </NavigationContainer>
    );
};

export default MainNavigator;
