import React from "react";
import {StyleSheet, View} from "react-native";
import {Drawer, Text} from "react-native-paper";
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";
import {authActions} from "../redux/actions";
import {useDispatch} from "react-redux";
import {globalStyles} from "../styles";

const DrawerContent = (props: any) => {

    const dispatch = useDispatch();

    return (<View style={globalStyles.container}>

        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>

        <Drawer.Section style={styles.footer}>
            <DrawerItem
                label='Sign Out'
                onPress={() => {
                    dispatch(authActions.signOut());
                    props.navigation.closeDrawer();
                }}
                icon={props =>
                    <Ionicons
                        name='md-log-out'
                        size={props.size}
                        color={props.color}
                    />
                }
            />
        </Drawer.Section>
    </View>);
};

const styles = StyleSheet.create({
    footer: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    }
});

export default DrawerContent;
