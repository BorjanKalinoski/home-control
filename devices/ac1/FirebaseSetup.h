#include <FirebaseESP8266.h>

FirebaseData firebaseData;
FirebaseJson firebaseJson;

void setupFirebase() {

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  //  //Set the size of WiFi rx/tx buffers in the case where we want to work with large data.
  //  firebaseData.setBSSLBufferSize(1024, 1024);
  //
  //  //Set the size of HTTP response buffers in the case where we want to work with large data.
  //  firebaseData.setResponseSize(1024);
  //
  //  //Set database read timeout to 1 minute (max 15 minutes)
  //  Firebase.setReadTimeout(firebaseData, 1000 * 60);
  //  //tiny, small, medium, large and unlimited.
  //  //Size and its write timeout e.g. tiny (1s), small (10s), medium (30s) and large (60s).
  //  Firebase.setwriteSizeLimit(firebaseData, "tiny");


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
