#include <FirebaseESP32.h>

FirebaseData writeData;
FirebaseData initData;

FirebaseJson initJson;
FirebaseJson writeJson;

void setupFirebase() {

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  //****COMMENT FROM HERE AFTER INITIAL SETUP***//
  //  String path = "/devices/-MK9iuWPpU0yC1Y_ytYq";

  //  initJson.set("type", DEVICE_TYPE);
  //  initJson.set("name", DEVICE_NAME);
  //  initJson.set("uid", UID);
  //  //
  //  if (Firebase.set(initData, path, initJson))
  //  {
  //    Serial.println("PATH: " + initData.dataPath());
  //    Serial.println("TYPE: " + initData.dataType());
  //  }
  //  else
  //  {
  //    Serial.println("FAILED");
  //    Serial.println("REASON: " + initData.errorReason());
  //    Serial.println("------------------------------------");
  //    Serial.println();
  //  }
  //****COMMENT TO HERE ***//
}
