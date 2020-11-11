#include <FirebaseESP32.h>

FirebaseData firebaseData;
FirebaseJson firebaseJson;

void setupFirebase() {

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  //****COMMENT FROM HERE AFTER INITIAL SETUP***//
  //  String path = "/devices/-MK9iuWPpU0yC1Y_ytYq";

  //  firebaseJson.set("type", DEVICE_TYPE);
  //  firebaseJson.set("name", DEVICE_NAME);
  //  firebaseJson.set("uid", UID);
  //  //
  //  if (Firebase.set(firebaseData, path, firebaseJson))
  //  {
  //    Serial.println("PATH: " + firebaseData.dataPath());
  //    Serial.println("TYPE: " + firebaseData.dataType());
  //  }
  //  else
  //  {
  //    Serial.println("FAILED");
  //    Serial.println("REASON: " + firebaseData.errorReason());
  //    Serial.println("------------------------------------");
  //    Serial.println();
  //  }
  //****COMMENT TO HERE ***//
}
