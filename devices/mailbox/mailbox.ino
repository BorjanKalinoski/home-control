#include "constants.h"
#include "WifiSetup.h"
#include "FirebaseSetup.h"
#include "utils.h"
#include "sensors.h"

void setup() {
  Serial.begin(115200);
  connectToWifi();
  setupFirebase();
  initializeSensors();
}

void loop() {
  bool mail = hasMail();
  sendStateToFirebase(mail);
  deepSleep();
}
