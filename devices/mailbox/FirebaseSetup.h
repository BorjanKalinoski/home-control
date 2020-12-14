#include <FirebaseESP32.h>

FirebaseData firebaseData;
FirebaseJson firebaseJson;

void setupFirebase() {

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

//  String path = "/devices/-MK9iuWPpU0yC1Y_ytYq";
//
//  firebaseJson.set("type", DEVICE_TYPE);
//  firebaseJson.set("name", DEVICE_NAME);
//  firebaseJson.set("uid", UID);
//
//  while (true) {
//
//    if (Firebase.set(firebaseData, path, firebaseJson))
//    {
//      Serial.println("PATH: " + firebaseData.dataPath());
//      Serial.println("TYPE: " + firebaseData.dataType());
//
//    }
//
//    else
//    {
//      Serial.println("Failed. Reason: " + firebaseData.errorReason());
//    }
//    delay(200);
//  }
}
