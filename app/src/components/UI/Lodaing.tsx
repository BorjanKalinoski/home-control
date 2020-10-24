import React from "react";
import { View} from "react-native";
import {ActivityIndicator} from 'react-native-paper';
import {globalStyles} from "../../styles";

const Loading = (props: any) => {
    const {style} = props;
    const size = props.size ? props.size : 'large';

    return <View style={{...globalStyles.container, ...globalStyles.center, ...style}}>
        <ActivityIndicator size={size}/>
    </View>;
};

export default Loading;
