import React from "react";
import { Text, StyleSheet } from "react-native";
const DEFAULT_FONT_SIZE = 20; //ovie treba da se vo config file
const CustomText = (props: any) => {
  return (
    <Text
      style={{
        fontSize: props.textSize ? props.textSize : DEFAULT_FONT_SIZE,
        textAlign: "center",
      }}
    >
      {props.text}
    </Text>
  );
};

//STIL od propsot itn itn, ili so css klasi?
//ovoj tekst ke se koristi za  prikazuvanje na mode text i temperaturata
export default CustomText;
