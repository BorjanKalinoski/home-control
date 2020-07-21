import React from "react";
import { Button, View } from "react-native";
//import action from bla bla, action('clicked')
const CustomButton = (props: any) => {
  // return <Button title={props.title} onPress={props.clicked} />;
  return (
    <View style={props.style}>
      <Button title={props.title} onPress={() => {}} />
    </View>
  );
};
export default CustomButton;
