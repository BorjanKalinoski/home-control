import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//TODO dynamic import
const CustomIcon = (props: any) => {
  return <Icon color={props.color} name={props.name} size={props.size} />;
};

export default CustomIcon;
