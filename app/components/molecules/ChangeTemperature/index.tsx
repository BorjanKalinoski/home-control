import { View, StyleSheet } from "react-native";
import CustomIcon from "../../atoms/CustomIcon";
const ChangeTemperature = (props: any) => {
  return (
    <View style={styles.column}>
      <CustomIcon />
      <CustomIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
  },
});

export default ChangeTemperature;
