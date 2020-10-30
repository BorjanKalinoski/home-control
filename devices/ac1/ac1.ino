#include <ir_Tcl.h>
const uint16_t kIrLed = 4;
IRTcl112Ac ac(kIrLed);

const unsigned long readInterval = 9 * 1000; //execute if every X seconds
unsigned long previousTime = 0;
double prevDate = 0.0;
bool stateHasChanged = false;
bool deviceFirstBoot = true;

#include "constants.h"
#include "WifiSetup.h"
#include "FirebaseSetup.h"
#include "utils.h"

void setup() {
  Serial.begin(115200);
  connectToWifi();
  setupFirebase();
  ac.begin();
}

void loop() {
  unsigned long currentTime = millis();
  if (currentTime - previousTime > readInterval) {
    previousTime = currentTime;
    readStateFromFirebase();

    if (stateHasChanged && !deviceFirstBoot) {
      ac.send();
      writeStateToFirebase();
    }
    deviceFirstBoot = false;
    stateHasChanged = false;
  }
}
