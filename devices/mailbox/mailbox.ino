#include <WiFi.h>
WiFiClient wifiClient;
#include "config.h"
#include "utils.h"

bool mail = false;
int sleepTimeS = 3600;

void setup() {

  connectToWifi();

  connectAndInitFirebase();

  pinMode(trigPin1, OUTPUT); // Sets the trigPin1 as an Output
  pinMode(echoPin1, INPUT); // Sets the echoPin1 as an Input
  pinMode(trigPin2, OUTPUT); // Sets the trigPin2 as an Output
  pinMode(echoPin2, INPUT); // Sets the echoPin2 as an Input

}

void loop() {
  bool hasMail1 = hasMail(getDistance(trigPin1, echoPin1));
  delay(2500);
  bool hasMail2 = hasMail(getDistance(trigPin2, echoPin2));

  if (( hasMail1 || hasMail2)) {
    mail = true;
    Serial.println("got mail!");
  } else if (!hasMail1 && !hasMail2) {
    mail = false;
    Serial.println("got no mail!");
  }
  publishData();
  //    ESP.deepSleep(sleepTimeS * 1000000);
}
void publishData() {
  FirebaseData mailData;
  FirebaseJson mailJson;
  Serial.println("publishing at");
  Serial.println(DEVICE_ID);

  mailJson.set("mail", mail);

  if (Firebase.set(mailData, DEVICE_ID, mailJson)) {
    Serial.println("PATH: " + mailData.dataPath());
    Serial.println("TYPE: " + mailData.dataType());
    Serial.print("VALUE: ");
    printResult(mailData);
    Serial.println("------------------------------------");
    Serial.println();
  } else {
    Serial.println("FAILED");
    Serial.println("REASON: " + mailData.errorReason());
    Serial.println("------------------------------------");
    Serial.println();
  }
}
