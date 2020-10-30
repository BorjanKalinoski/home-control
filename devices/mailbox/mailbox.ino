#include "constants.h"
#include "WifiSetup.h"
#include "FirebaseSetup.h"
#include "utils.h"

bool mail = false;
int sleepTimeS = 15;
const int trigPin1 = 2;  //D4 pins
const int echoPin1 = 5;  //D3
const int trigPin2 = 19;  //D5
const int echoPin2 = 18  ;  //D6

void setup() {

  Serial.begin(115200);
  connectToWifi();
  setupFirebase();

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
  } else if (!hasMail1 && !hasMail2) {
    mail = false;
  }
  sendStateToFirebase();
  delay(2000);
  ESP.deepSleep(sleepTimeS * 1000000);
}
void sendStateToFirebase() {

  writeJson.set("mail", mail);
  while (true)
  {
    if (Firebase.set(writeData, WRITE_PATH, writeJson)) {
      Serial.println("Wrote at: " + writeData.dataPath());
      break;
    } else {
      Serial.println("Err:  " + writeData.errorReason());
    }
  }

}
