import React from "react";
import { Button } from "react-native";
//import action from bla bla, action('clicked')
const CustomButton = (props: any) => {
  // return <Button title={props.title} onPress={props.clicked} />;
  return <Button title={props.title} onPress={() => {}} />;
};
export default CustomButton;
