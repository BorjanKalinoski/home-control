import React from "react";
import {View} from "react-native";
import {Drawer, Text} from "react-native-paper";
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";
import {authActions} from "../redux/actions";
import {useDispatch} from "react-redux";

const DrawerContent = props => {
    const dispatch = useDispatch();
    return (<View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <Drawer.Section style={{marginBottom: 15, borderTopColor: '#f4f4f4', borderTopWidth: 1}}>
            <DrawerItem
                label='Sign Out'
                onPress={() => {
                    dispatch(authActions.logout());
                }}
                icon={props => <Ionicons
                    name='md-log-out'
                    size={props.size}
                    color={props.color}
                />}
            />

        </Drawer.Section>
    </View>);
};

export default DrawerContent;
