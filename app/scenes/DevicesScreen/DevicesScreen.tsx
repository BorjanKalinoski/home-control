import React, { JSXElementConstructor } from "react";
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
console.log("starting!");
const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

//treba vo zavisnost od ova, dinamicno da se kreiraat novi screens!
const DATA: Device[] = [
  {
    id: "1",
    name: "Livingroom",
    type: "AC",
  },
  {
    id: "2",
    name: "Bedroom",
    type: "ac",
  },
  {
    id: "3",
    name: "Mailbox",
    type: "mail",
  },
];
function DevicesScreen({ navigation, route }: any) {
  // console.log(navigation);
  const onDevicePressHandler = (aaa: any) => {
    // console.log(navigator);
    navigation.navigate("Livingroom", {
      id: 1,
    });
    // navigator.nav
  };
  const renderItem = ({ item }: { item: Device }) => {
    return (
      <TouchableOpacity style={styles.listItem} onPress={onDevicePressHandler}>
        <Text> {item.name} </Text>
        <Icon color={"red"} name={"air"} size={40} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<Text style={styles.listHeader}> Devices!</Text>}
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
