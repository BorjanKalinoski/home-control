import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const DATA = [
  {
    id: "1",
    deviceName: "Livingroom",
    deviceType: "AC",
  },
  {
    id: "2",
    deviceName: "Bedroom",
    deviceType: "ac",
  },
  {
    id: "3",
    deviceName: "Mailbox",
    deviceType: "mail",
  },
];

function DevicesScreen(props: any) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.listItem}>
          <Text>{item.deviceName} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  listItem: {
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 2,
    justifyContent: "center",
    marginVertical: 8,
    padding: 10,
    textAlign: "center",
  },
});
console.log("mod");
