#include <ir_Tcl.h>
const uint16_t kIrLed = D5;
IRTcl112Ac ac(kIrLed);

const unsigned long readInterval = 10 * 1000; //execute every X seconds
const unsigned long sensorWriteInterval = 10 * 1000;
unsigned long previousTime = 0;
unsigned long previousSensorWriteTime = 0;

double previousDate = 0.0;
bool stateHasChanged = false;

#include "constants.h"
#include "WifiSetup.h"
#include "FirebaseSetup.h"
#include "utils.h"
#include "SI7021.h"

void setup() {
  Serial.begin(115200);
  connectToWifi();
  setupFirebase();
  ac.begin();
  initSI7021();
  readLastWriteDate();
  //  readStateFromFirebase();

}

void loop() {
  unsigned long currentTime = millis();
  if (currentTime - previousTime > readInterval) {
    previousTime = currentTime;

    readStateFromFirebase();

    if (stateHasChanged) {
      ac.send();
      Serial.println("Writing!!");
      writeStateToFirebase();
    }
    stateHasChanged = false;
  }

  if (currentTime - previousSensorWriteTime > sensorWriteInterval) {
    previousSensorWriteTime = currentTime;
    writeSI7021toFirebase();
  }

}
