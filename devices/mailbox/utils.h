//#include "config.h"




#define MAX_DISTANCE 200


// define the timeOut according to the maximum range. timeOut= 2*MAX_DISTANCE /100 /340
//*1000000 = MAX_DISTANCE*58.8
float timeOut = MAX_DISTANCE * 60;
int soundVelocity = 340; //speed of air =const = 340ms











float getDistance(int trigPin, int echoPin) { //measure and calculate distance from sensors
  unsigned long pingTime;
  float distance;

  digitalWrite(trigPin, HIGH); // make trigPin output high level lasting for 10μs to triger HC_SR04
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  pingTime = pulseIn(echoPin, HIGH, timeOut); // Wait HC-SR04 returning to the high level and measure out this waitting time
  distance = (float)pingTime * soundVelocity / 2 / 10000; //calculate the distance

  return distance;
}

bool hasMail(float distance) //check if there is something in the mailbox
{
  if (distance < 7.5 || distance > 9) // the distance from the mailbox door
    return true;
  return false;
}
