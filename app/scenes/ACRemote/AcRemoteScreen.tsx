import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "../../components/atoms/CustomIcon";
import DisplayContainer from "../../components/organisms/DisplayContainer";
import CustomText from "../../components/atoms/CustomText";
import SettingsContainer from "../../components/organisms/SettingsContainer";
import ChangeTemperature from "../../components/molecules/ChangeTemperature";
import { TouchableOpacity } from "react-native-gesture-handler";
const AcRemoteScreen = ({ navigation, route }: any) => {
  const { deviceName, deviceType } = route.params;
  return (
    <View style={styles.container}>
      <CustomText text={deviceName} textSize={30} />
      <DisplayContainer />
      <View style={styles.header}>
        <TouchableOpacity>
          <CustomIcon name="power" iconSize={48} />
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomIcon name="information-outline" iconSize={48} />
        </TouchableOpacity>
      </View>
      <SettingsContainer />
      <ChangeTemperature />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    textAlign: "center",
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "red",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "65%",
    alignSelf: "center",
  },
});

export default AcRemoteScreen;
