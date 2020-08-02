import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { Device } from "../../types/types";
import { db } from "./../../config/config";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

//treba vo zavisnost od ova, dinamicno da se kreiraat novi screens!
function DevicesScreen({ navigation, route }: any) {
  const [devices, setDevices] = useState([]);
  const [deviceData, setDeviceData] = useState({
    deviceName: "",
    deviceType: "",
  });

  useEffect(() => {
    db.ref("/devices").on("value", (querySnapShot) => {
      let devices = querySnapShot.val();
      let deviceData = { ...devices };
      devices = Object.keys({ ...devices });
      setDeviceData(deviceData);
      setDevices(devices);
    });
  }, []);

  const onDevicePressHandler = (deviceData: any) => {
    if (deviceData.deviceType == "ac") {
      navigation.navigate("ACRemote", {
        deviceName: deviceData.deviceName,
        deviceType: deviceData.deviceType,
      });
    }
    // return;
  };
  const renderItem = ({ item }: { item: Device }) => {
    let isEnabled =
      (Object.keys(deviceData).length === 0 && deviceData.constructor === Object
        ? true
        : false) || deviceData.deviceType === "mailbox";
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={onDevicePressHandler.bind(this, deviceData[item])}
        disabled={isEnabled}
        // activeOpacity={isEnabled ? 0.5 : 1}
      >
        <Text> {item}</Text>
        <Icon color={"red"} name={"air"} size={40} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<Text style={styles.listHeader}> Devices!</Text>}
        data={devices}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
export default DevicesScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    marginTop: statusBarHeight,
  },
  listHeader: {
    backgroundColor: "white",
    fontSize: 50,
  },
  listItem: {
    backgroundColor: "white",
    borderColor: "red",
    justifyContent: "space-around",
    marginTop: 5,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
