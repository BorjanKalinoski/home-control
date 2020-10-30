import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native"
import {Divider, List} from "react-native-paper";
import firebase from '../../firebase';
import Loading from "../UI/Lodaing";
import Mailbox from "../../models/Mailbox";

const MailboxListItem = (props: any) => {
    const [hasMail, setHasMail] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {title, deviceId} = props;

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

    return <View>
        <List.Item
            title={title}
            description={hasMail ? 'You have new mail!' : 'You have no mail!'}
            left={(props) => <List.Icon color={hasMail ? 'yellow' : ''} icon={hasMail ? 'email' : 'mail'}/>}
        />
        <Divider/>
    </View>;
};

const styles = StyleSheet.create({
});

export default MailboxListItem;

