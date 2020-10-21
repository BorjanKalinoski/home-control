#include "firebase_utils.h"

#define MODE_HEAT kTcl112AcHeat
#define MODE_COOL kTcl112AcCool
#define MODE_DRY kTcl112AcDry
#define MODE_FAN kTcl112AcFan
#define MODE_AUTO kTcl112AcAuto

#define FAN_LOW kTcl112AcFanLow
#define FAN_MED kTcl112AcFanMed
#define FAN_HI kTcl112AcFanHigh
#define FAN_AUTO kTcl112AcFanAuto

#define SWING_OFF kTcl112AcSwingVOff
#define SWING_ON kTcl112AcSwingVOn
#define LEGACY_TIMING_INFO false

#define WIFI_SSID "Boki"
#define WIFI_PASSWORD "01011962"
#define FIREBASE_HOST "home-control-fe934.firebaseio.com"
#define FIREBASE_AUTH "xb8aOxIGC98rd6yakBe9bPY071KcRR9A8lutj8em"

#define DEVICE_NAME "Living Room Air Conditioner"
#define DEVICE_TYPE "AC"
#define UID "v63Qpf3GRATe5Jgz8XPHmp2tU0E2"
const char DEVICE_ID[21] = "-MK3zOf-KoaDLGkBwYEr";


const uint16_t kRecvPin = 2;
const uint16_t kIrLed = 4;  // ESP8266 GPIO pin to use. Recommended: 4 (D2).

const uint8_t kTimeout = 50;
const uint16_t kMinUnknownSize = 12;



void connectToWifi() {
  Serial.begin(115200);
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

  if (Firebase.set(firebaseData, &path[0], json))
  {
    Serial.println("PATH: " + firebaseData.dataPath());
    Serial.println("TYPE: " + firebaseData.dataType());
    Serial.print("VALUE: ");
    printResult(firebaseData);
    Serial.println("------------------------------------");
    Serial.println();
    Serial.println(firebaseData.pushName());
    Serial.println(firebaseData.dataPath() + "/" + firebaseData.pushName());
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
}