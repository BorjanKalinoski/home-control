const int trigPin1 = 2;  //D4 pins
const int echoPin1 = 5;  //D3
const int trigPin2 = 19;  //D5
const int echoPin2 = 18  ;  //D6

const int MAX_DISTANCE = 200;
const float timeOut = MAX_DISTANCE * 60;
const int soundVelocity = 340;

float getDistanceFromSensor(int, int);

void initialiseSensors() {
  pinMode(trigPin1, OUTPUT); // Sets the trigPin1 as an Output
  pinMode(echoPin1, INPUT); // Sets the echoPin1 as an Input
  pinMode(trigPin2, OUTPUT); // Sets the trigPin2 as an Output
  pinMode(echoPin2, INPUT); // Sets the echoPin2 as an Input
}

bool detectObstacle(float distance)
{
  if (distance < 7.5 || distance > 9)
    return true;
  return false;
}

bool hasMail() {
  float distance1 = getDistanceFromSensor(trigPin1, echoPin1);
  delay(2500);
  float distance2 = getDistanceFromSensor(trigPin2, echoPin2);

  if (detectObstacle(distance1) || detectObstacle(distance2)) {
    return true;
  }
  return false;
}



float getDistanceFromSensor(int trigPin, int echoPin) {
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
