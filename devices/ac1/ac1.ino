#include <ir_Tcl.h>
const uint16_t kIrLed = 4;
IRTcl112Ac ac(kIrLed);

const unsigned long readInterval = 9 * 1000; //execute if every X seconds
unsigned long previousTime = 0;
double prevDate = 0.0;
bool stateHasChanged = false;
bool firstLoad = true;

#include "constants.h"
#include "WifiSetup.h"
#include "FirebaseSetup.h"
#include "utils.h"

void setup() {
  connectToWifi();
  setupFirebase();
  ac.begin();
}

void loop() {
  unsigned long currentTime = millis();
  if (currentTime - previousTime > readInterval) {
    Serial.println("i am doing it");
    previousTime = currentTime;
    readStateFromFirebase();
    Serial.println("read the data ma lod");
    Serial.println(stateHasChanged);
    Serial.println(firstLoad);
    if (stateHasChanged && !firstLoad) {
      Serial.println("!!!! ac.send();");
      ac.send();
      writeState();
    }
    firstLoad = false;
    stateHasChanged = false;
  }
}
