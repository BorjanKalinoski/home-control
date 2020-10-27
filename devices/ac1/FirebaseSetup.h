#include <FirebaseESP8266.h>

FirebaseData readData;
FirebaseData writeData;
FirebaseJson writeJson;
FirebaseData initData;
FirebaseJson initJson;

void setupFirebase() {

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  //  Firebase.setReadTimeout(readData, 500 * 60); //set read timeout to 30s
  //  Firebase.setwriteSizeLimit(writeData, "tiny");

  //****COMMENT FROM HERE AFTER INITIAL SETUP***//
  String path = "/devices/-MK3zOf-KoaDLGkBwYEr";

  initJson.set("type", DEVICE_TYPE);
  initJson.set("name", DEVICE_NAME);
  initJson.set("uid", UID);
  //
  if (Firebase.set(initData, path, initJson))
  {
    Serial.println("PATH: " + initData.dataPath());
    Serial.println("TYPE: " + initData.dataType());
  }
  else
  {
    Serial.println("FAILED");
    Serial.println("REASON: " + initData.errorReason());
    Serial.println("------------------------------------");
    Serial.println();
  }
  Serial.println("wa!");
  //****COMMENT TO HERE ***//
}
