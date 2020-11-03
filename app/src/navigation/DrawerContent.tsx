import React from "react";
import {StyleSheet, View} from "react-native";
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

        <View style={styles.footer}>
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
        </View>
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
//        <DrawerContentScrollView {...props} style={{padding:0,margin:0, borderWidth:2, borderColor: 'red'}}>
//             <View style={{
//                 backgroundColor: 'black',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 padding: 10,
//                 borderWidth: 2,
//                 borderColor: 'green'
//             }}>
//                 <Avatar.Icon icon='folder' color={'#fafafa'} style={{backgroundColor: 'grey'}} size={50}/>
//                 {/*<Avatar size='large' rounded icon={{ name: 'user-circle-o', type: 'font-awesome', size: 80 }} />*/}
//                 <Text style={{color: '#f9f9f9', marginTop: '3%', fontFamily: 'sans-serif-condensed'}}>Welcome</Text>
//                 <Text style={{color: '#f9f9f9', fontFamily: 'sans-serif-condensed'}}>{email}</Text>
//             </View>
//             <DrawerItems {...props}/>
//         </DrawerContentScrollView>
