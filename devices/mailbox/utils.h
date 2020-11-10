#define MAX_DISTANCE 200

float timeOut = MAX_DISTANCE * 60;
int soundVelocity = 340;


float getDistance(int trigPin, int echoPin) {
  unsigned long pingTime;
  float distance;

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  pingTime = pulseIn(echoPin, HIGH, timeOut);
  distance = (float)pingTime * soundVelocity / 2 / 10000;

  Serial.println("Sensor");
  Serial.println(trigPin);
  Serial.println("Distance:");
  Serial.println(distance);
  return distance;
}

bool hasMail(float distance)
{
  if (distance < 7.5 || distance > 9)
    return true;
  return false;
}
