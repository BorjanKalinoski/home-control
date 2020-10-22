import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native"
import {ActivityIndicator, Divider, List} from "react-native-paper";
import {firebase} from '../../firebase/config';

const MailboxListItem = (props: any) => {
    const [hasMail, setHasMail] = useState();
    const {name, path} = props;

    useEffect(() => {
        firebase.database().ref(path).on('value', (snapshot) => {
            const response = snapshot.val();
            setHasMail((prevState) => response.mail);
        });

        return () => {
            firebase.database().ref(path).off('value');
        };
    }, []);

    return <View>
        <List.Item
            // style={styles.device}
            title={name}
            description={hasMail ? 'You have new mail!' : 'You have no mail!'}
            left={(props) => {
                if (hasMail === undefined) {
                    return <ActivityIndicator/>;
                }
                return <List.Icon color={hasMail ? 'yellow' : ''} icon={hasMail ? 'email' : 'mail'}/>;
            }}
        />
        <Divider/>
    </View>;
};

const styles = StyleSheet.create({

});

export default MailboxListItem;

