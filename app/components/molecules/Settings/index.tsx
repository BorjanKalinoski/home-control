import CustomButton from "../../atoms/CustomButton";
import { View, StyleSheet } from "react-native";
//mozebi so css samo ke dodademe width na custom buttons ili na rowot
const Settings = (props: any) => {
  return (
    <View>
      <View style={styles.row}>
        <CustomButton text={"Mode"} />
        <CustomButton text={"Fan"} />
      </View>
      <View style={styles.row}>
        <CustomButton text={"Turbo"} />
        <CustomButton text={"Swing"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
  },
});

export default Settings;
