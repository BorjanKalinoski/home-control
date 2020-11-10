const unsigned long uS_TO_S_FACTOR = 1000000; /* Conversion factor for micro seconds to seconds */
const unsigned long TIME_TO_SLEEP_S = 15; /* Time ESP32 will go to sleep (in seconds) */

void deepSleep() {
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP_S * uS_TO_S_FACTOR);
  esp_deep_sleep_start();
  //  adc_power_off();
  //  esp_wifi_stop();
  //  esp_bt_controller_disable();

}

void sendStateToFirebase(bool mail) {

  firebaseJson.clear();
  firebaseJson.set("mail", mail);

  while (true) {
    if (Firebase.set(firebaseData, PATH + "/ino_to_app", firebaseJson)) {
      Serial.println("Wrote at: " + firebaseData.dataPath());
      break;
    } else {
      Serial.println("Err: " + firebaseData.errorReason());
    }
    delay(300);
  }
}
