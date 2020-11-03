import React, {useEffect, useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native"
import firebase from '../../firebase';
import Loading from "../UI/Lodaing";
import Mailbox from "../../models/Mailbox";
import {Icon, ListItem, Text} from "react-native-elements";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {blue, iconSize, styles, yellow} from "../../constants/list-item";

const MailboxListItem = (props: any) => {
    const {name, deviceId} = props;

    const [hasMail, setHasMail] = useState();
    const [displayDeviceName, setDisplayDeviceName] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    let displayText;

    if (displayDeviceName) {
        displayText = name;
    } else if (hasMail) {
        displayText = 'You have a new mail!';
    } else {
        displayText = 'Your mailbox is empty!';
    }

    useEffect(() => {
        const path = `${deviceId}/ino_to_app`;
        firebase.database().ref(path).on('value', (snapshot) => {
            const response: Mailbox = snapshot.val();
            if (response) {
                // @ts-ignore
                setHasMail(response.mail);
                setIsLoading(false);
            } else{
                setIsLoading(false);
            }
        });

        return () => {
            firebase.database().ref(path).off('value');
        };
    }, []);


    if (isLoading) {
        return <Loading/>;
    }

    return <TouchableOpacity onPress={() => setDisplayDeviceName((prevState => !prevState))}>
        <ListItem
            bottomDivider
            containerStyle={{
                backgroundColor: hasMail ? yellow : blue
            }}
        >
            <Ionicons size={iconSize} color={hasMail ? 'white' : 'white'} name={hasMail ? 'md-mail-unread' : 'md-mail'}/>
            <Text style={styles.text}>{displayText}</Text>
        </ListItem>
    </TouchableOpacity>;
};



export default MailboxListItem;

