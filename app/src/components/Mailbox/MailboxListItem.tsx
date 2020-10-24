import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native"
import {Divider, List} from "react-native-paper";
import firebase from '../../firebase';
import Loading from "../UI/Lodaing";

const MailboxListItem = (props: any) => {
    const [hasMail, setHasMail] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {title, referencePath} = props;

    useEffect(() => {
        firebase.database().ref(referencePath).on('value', (snapshot) => {
            const response = snapshot.val();
            setHasMail(response.mail);
            setIsLoading(false);
        });

        return () => {
            firebase.database().ref(referencePath).off('value');
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

