#include <ESP8266WiFi.h>

void connectToWifi() {
  Serial.println("Connecting to ");
  Serial.println(WIFI_SSID);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print("*");
    delay(300);
  }
  Serial.println("Connected to WiFi!");
}
