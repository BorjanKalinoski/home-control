import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import firebase from '../firebase';
import {authActions} from '../store/actions';
import {Loading} from "../components";
import {AirConditionerRemoteScreen, DevicesScreen, AuthScreen} from "../screens";

const Stack = createStackNavigator();

const MainStackNavigator = <Stack.Navigator>
    <Stack.Screen name="Devices" component={DevicesScreen}/>
    <Stack.Screen
        name="AirConditionerRemote"
        component={AirConditionerRemoteScreen}
        options={({route}) => ({title: route?.params?.title})}/>
</Stack.Navigator>;

const MainNavigator = (props: any) => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        const authSub = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(authActions.loadUserDetails(true));
            } else {
                dispatch(authActions.loadUserDetails(false));
            }
            setIsLoading(false);
        });
        return () => {
            authSub();
        };
    });

    if (isLoading) {
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
