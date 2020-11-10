import React, {SetStateAction, useEffect, useState} from "react";
import { TouchableOpacity} from "react-native"
import firebase from '../../firebase';
import Loading from "../UI/Lodaing";
import Mailbox from "../../models/Mailbox";
import { ListItem, Text} from "react-native-elements";
import {Ionicons} from "@expo/vector-icons";
import {iconSize, listStyles} from "../../constants/list-item";
import Colors from "../../constants/Colors";

const MailboxListItem = ({name, deviceId}: MailboxListItemProps) => {

    const [hasMail, setHasMail]: [undefined | boolean, SetStateAction<boolean | any>] = useState();
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
                setHasMail(response.mail);
                setIsLoading(false);
            } else {
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
                backgroundColor: hasMail ? Colors.yellow : Colors.blue
            }}
        >
            <Ionicons size={iconSize} color={hasMail ? 'white' : 'white'}
                      name={hasMail ? 'md-mail-unread' : 'md-mail'}/>
            <Text style={listStyles.text}>{displayText}</Text>
        </ListItem>
    </TouchableOpacity>;
};

type MailboxListItemProps = {
    name: string;
    deviceId: string;
    uid?: string;
};


export default MailboxListItem;

