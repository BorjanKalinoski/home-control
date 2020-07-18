// import React from "react";
// import {
//   StyleSheet,
//   FlatList,
//   Text,
//   StatusBar,
//   SafeAreaView,
//   Platform,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import Icon from "react-native-vector-icons/Entypo";
// import AcRemoteScreen from "./AcRemoteScreen";
// console.log("starting!");
// const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

// const DATA = [
//   {
//     id: "1",
//     deviceName: "Livingroom",
//     deviceType: "AC",
//   },
//   {
//     id: "2",
//     deviceName: "Bedroom",
//     deviceType: "ac",
//   },
//   {
//     id: "3",
//     deviceName: "Mailbox",
//     deviceType: "mail",
//   },
// ];
// function DevicesScreen(props: any) {
//   const renderItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={styles.listItem} onPress={() => {}}>
//         <Text> {item.deviceName} </Text>
//         <Icon color={"red"} name={"air"} size={40} />
//       </TouchableOpacity>
//     );
//   };
//   return <AcRemoteScreen />;

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         ListHeaderComponent={<Text style={styles.listHeader}> Devices!</Text>}
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// }
// export default DevicesScreen;
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "red",
//     flex: 1,
//     marginTop: statusBarHeight,
//   },
//   listHeader: {
//     backgroundColor: "white",
//     fontSize: 50,
//   },
//   listItem: {
//     backgroundColor: "white",
//     borderColor: "red",
//     justifyContent: "space-around",
//     marginTop: 5,
//     paddingVertical: 5,
//     flexDirection: "row",
//     alignItems: "center",
//   },
// });
