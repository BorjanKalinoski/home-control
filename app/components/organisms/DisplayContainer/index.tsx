import React from "react";
import { View, StyleSheet } from "react-native";
import Fan from "../../molecules/Fan";
import CustomText from "../../atoms/CustomText";
import ModeIcon from "../../molecules/ModeIcon";
const DISPLAY_ICON_SIZE = 42;
const DISPLAY_ICON_TEXT_SIZE = 15; //ovie treba da se vo config file
const DisplayContainer = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ModeIcon
          iconSize={DISPLAY_ICON_SIZE}
          name="autorenew"
          text="Auto"
          textSize={DISPLAY_ICON_TEXT_SIZE}
        />
        <ModeIcon
          iconSize={DISPLAY_ICON_SIZE}
          name="water"
          text="Dry"
          textSize={DISPLAY_ICON_TEXT_SIZE}
        />
        <ModeIcon
          iconSize={DISPLAY_ICON_SIZE}
          name="snowflake"
          text="Cool"
          textSize={DISPLAY_ICON_TEXT_SIZE}
        />
        <ModeIcon
          iconSize={DISPLAY_ICON_SIZE}
          name="fan"
          text="Fan"
          textSize={DISPLAY_ICON_TEXT_SIZE}
        />
        <ModeIcon
          iconSize={DISPLAY_ICON_SIZE}
          name="weather-sunny"
          text="Heat"
          textSize={DISPLAY_ICON_TEXT_SIZE}
        />
      </View>
      <View style={[styles.row, styles.bottomRow]}>
        <Fan />
        <ModeIcon name="engine" text="Turbo" />
        <CustomText text="22 &#x2103;" textSize={38} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "grey",
    width: "90%",
    height: 165,
    paddingVertical: 14,
    marginVertical: 12,
  },
  row: {
    flexDirection: "row",
    height: "60%",
  },
  bottomRow: {
    paddingHorizontal: 22,
    height: "40%",
  },
});

export default DisplayContainer;
