#include <FirebaseESP8266.h>

FirebaseData readData;
FirebaseData writeData;
FirebaseData initData;
FirebaseData lastWriteData;
FirebaseData writeSensorData;

FirebaseJson initJson;
FirebaseJson writeJson;
FirebaseJson writeSensorJson;

void setupFirebase() {

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);


  //****COMMENT FROM HERE AFTER INITIAL SETUP***//
  //  String path = "/devices/-MK3zOf-KoaDLGkBwYEr";

  //  initJson.set("type", DEVICE_TYPE);
  //  initJson.set("name", DEVICE_NAME);
  //  initJson.set("uid", UID);
  //  while(true){

  //  if (Firebase.set(initData, path, initJson))
  //  {
  //    Serial.println("PATH: " + initData.dataPath());
  //    Serial.println("TYPE: " + initData.dataType());
  //break;
  //  }
  //  else
  //  {
  //    Serial.println("FAILED");
  //    Serial.println("REASON: " + initData.errorReason());
  //    Serial.println("------------------------------------");
  //    Serial.println();
  //  }
  //}
  //****COMMENT TO HERE ***//
}
