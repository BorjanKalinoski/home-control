#include "firebase_utils.h"
//const int trigPin1 = 2;  //D4 pins
//const int echoPin1 = 0;  //D3
//const int trigPin2 = 14;  //D5
//const int echoPin2 = 12;  //D6

const int trigPin1 = 2;  //D4 pins
const int echoPin1 = 5;  //D3
const int trigPin2 = 19;  //D5
const int echoPin2 = 18  ;  //D6

#define WIFI_SSID "Boki"
#define WIFI_PASSWORD "01011962"
#define FIREBASE_HOST "home-control-fe934.firebaseio.com"
#define FIREBASE_AUTH "xb8aOxIGC98rd6yakBe9bPY071KcRR9A8lutj8em"

#define DEVICE_NAME "UL. Nikola Vukmirovikj br. 25A"
#define DEVICE_TYPE "MAILBOX"
#define UID "v63Qpf3GRATe5Jgz8XPHmp2tU0E2"
const char DEVICE_ID[21] = "-MK9iuWPpU0yC1Y_ytYq";


void connectToWifi() {
  Serial.begin(115200);
  Serial.println("Connecting to ");
  Serial.println(WIFI_SSID);
//  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(" . ");
    delay(500);
  }
  Serial.println("Wifi connected!");
}


void connectAndInitFirebase() {
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);
  Firebase.setMaxRetry(firebaseData, 3);

  Serial.println("------------------------------------");
  Serial.println("Set Json...");

  json.set("type", DEVICE_TYPE);
  json.set("name", DEVICE_NAME);
  json.set("uid", UID);

  std::string path = std::string("/devices/") + std::string(DEVICE_ID);

//pushJSON when initializing the device id for the first time, remove the + std from the line above;
  if (Firebase.set(firebaseData, &path[0], json))
  {
    Serial.println("PATH: " + firebaseData.dataPath());
    Serial.println("TYPE: " + firebaseData.dataType());
    Serial.print("VALUE: ");
    printResult(firebaseData);
    Serial.println("------------------------------------");
    Serial.println();
//    Serial.println(firebaseData.pushName());
//    Serial.println(firebaseData.dataPath() + "/" + firebaseData.pushName());
  }
  else
  {
    Serial.println("FAILED");
    Serial.println("REASON: " + firebaseData.errorReason());
    Serial.println("------------------------------------");
    Serial.println();
    return;
  }
// Make sure to rerun this and we probably wont be needing this for the MAILBOX
//  Firebase.setStreamCallback(firebaseData, streamCallback, streamTimeoutCallback);
//
//  if (!Firebase.beginStream(firebaseData, DEVICE_ID)) {
//    //Could not begin stream connection, then print out the error detail
//    Serial.println(firebaseData.errorReason());
//  }
}
