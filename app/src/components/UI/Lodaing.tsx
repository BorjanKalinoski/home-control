import React from "react";
import {View, ActivityIndicator} from "react-native";
import {globalStyles} from "../../styles";

const Loading = (props: any) => {
    const {style} = props;
    const size = props.size ? props.size : 'large';

    return <View style={{...globalStyles.stretch, ...globalStyles.center, ...style}}>
        <ActivityIndicator color="#0000ff" size={size}/>
    </View>;
};

export default Loading;
