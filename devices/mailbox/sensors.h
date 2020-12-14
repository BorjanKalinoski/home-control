const int trigPin1 = 2;
const int echoPin1 = 5;
const int trigPin2 = 19;
const int echoPin2 = 18;

void initializeSensors() {
  pinMode(trigPin1, OUTPUT);
  pinMode(echoPin1, INPUT);
  pinMode(trigPin2, OUTPUT);
  pinMode(echoPin2, INPUT);
}

bool detectObstacle(float distance)
{
  if (distance < 7.5 || distance > 9)
    return true;
  return false;
}

float getDistanceFromSensor(int trigPin, int echoPin) {
  unsigned long duration;
  float distance;
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration * 0.0343) / 2;
  return distance;
}

bool hasMail() {
  float distance1 = getDistanceFromSensor(trigPin1, echoPin1);
  delay(2000);
  float distance2 = getDistanceFromSensor(trigPin2, echoPin2);
  Serial.println(distance1);
  Serial.println(distance2);

  if (detectObstacle(distance1) || detectObstacle(distance2)) {
    return true;
  }
  return false;
}

//
//  unsigned long pingTime;
//  float distance;
//  digitalWrite(trigPin, HIGH);
//  delayMicroseconds(10);
//  digitalWrite(trigPin, LOW);
//  pingTime = pulseIn(echoPin, HIGH, timeOut);
//  distance = (float)pingTime * soundVelocity / 2 / 10000;
//  return distance;
//}
