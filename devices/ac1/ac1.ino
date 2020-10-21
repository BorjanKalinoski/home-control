#include <ESP8266WiFi.h>
#include "config.h"
#include <IRremoteESP8266.h>
#include <ir_Tcl.h>

IRTcl112Ac ac(kIrLed);
WiFiClient wifiClient;


void setup() {
  pinMode(2, OUTPUT);

  connectToWifi();

  connectAndInitFirebase();

  ac.begin();
}

void loop() {
}
