const unsigned long uS_TO_S_FACTOR = 1000000; /* Conversion factor for micro seconds to seconds */
const unsigned long TIME_TO_SLEEP_S = 4000; /* Time ESP32 will go to sleep (in seconds) */
#include <esp_wifi.h>
#include "driver/adc.h"

void deepSleep() {
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP_S * uS_TO_S_FACTOR);
  adc_power_off();
  esp_wifi_disconnect();
  esp_deep_sleep_start();
}

void sendStateToFirebase(bool mail) {
  firebaseJson.clear();
  firebaseJson.set("mail", mail);
  firebaseJson.set("date/.sv", "timestamp");
  while (true) {
    yield();
    if (Firebase.set(firebaseData, BASE_PATH + "/ino_to_app", firebaseJson)) {
      Serial.println("Success!");
      break;
    } else {
      Serial.println("Error: " + firebaseData.errorReason());
    }
    delay(200);
  }
}
