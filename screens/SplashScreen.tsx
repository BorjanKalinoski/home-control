import React, {useState} from "react";
import {Text, View} from 'react-native';

const SplashScreen = (props: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState();
    if (isLoading) {
        return <View><Text>Loading..</Text></View>;
    }

    return (<View>
        <Text>wawa</Text>
    </View>);
};


export default SplashScreen;
