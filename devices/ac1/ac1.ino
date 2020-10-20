#include <FirebaseESP8266.h>
#include <ESP8266WiFi.h>
#include "config.h"
#include <IRremoteESP8266.h>
#include <ir_Tcl.h>

IRTcl112Ac ac(kIrLed);
WiFiClient wifiClient;

FirebaseData firebaseData;
FirebaseJson json;

void setup() {
  pinMode(2, OUTPUT);

  Serial.begin(115200);
  delay(100);
  Serial.println("Connecting to ");
  Serial.println(WIFI_SSID);
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(" . ");
    delay(500);
  }
  Serial.println("Wifi connected!");

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);
  Firebase.setMaxRetry(firebaseData, 3);


  Serial.println("------------------------------------");
  Serial.println("Set Json...");

  json.set("type", DEVICE_TYPE);
  json.set("name", DEVICE_NAME);
  json.set("uid", UID);

  std::string path = std::string("/devices/") + std::string(DEVICE_ID);

  //  char path[21] = rootPath.concat(DEVICE_ID);
  //  String path = "/devices/".concat(DEVICE_ID);

  //TODO in future, check if there is the unique id, if not generate
  if (Firebase.set(firebaseData, &path[0], json))
  {
    Serial.println("PASSED");
    Serial.println("PATH: " + firebaseData.dataPath());
    Serial.println("TYPE: " + firebaseData.dataType());
    Serial.print("VALUE: ");
    printResult(firebaseData);
    Serial.println("------------------------------------");
    Serial.println();
    //   Serial.println(firebaseData.pushName());
    //      Serial.println(firebaseData.dataPath() + "/"+ firebaseData.pushName());
  }
  else
  {
    Serial.println("FAILED");
    Serial.println("REASON: " + firebaseData.errorReason());
    Serial.println("------------------------------------");
    Serial.println();
    return;
  }

  Firebase.setStreamCallback(firebaseData, streamCallback, streamTimeoutCallback);

  if (!Firebase.beginStream(firebaseData, DEVICE_ID)) {
    //Could not begin stream connection, then print out the error detail
    Serial.println(firebaseData.errorReason());
  }

  ac.begin();
}

void loop() {
}
