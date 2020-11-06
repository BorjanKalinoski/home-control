#include <Wire.h>
#define Addr 0x40

void initSI7021() {
  // Initialise I2C communication as MASTER
  Wire.begin();

  // Start I2C transmission
  Wire.beginTransmission(Addr);
  // Stop I2C transmission
  Wire.endTransmission();
  delay(300);
}
float readHumidity() {
  unsigned int data[2];
  // Start I2C transmission
  Wire.beginTransmission(Addr);
  // Send humidity measurement command, NO HOLD MASTER
  Wire.write(0xF5);
  // Stop I2C transmission
  Wire.endTransmission();
  delay(500);
  // Request 2 bytes of data
  Wire.requestFrom(Addr, 2);

  // Read 2 bytes of data
  // humidity msb, humidity lsb
  if (Wire.available() == 2)
  {
    data[0] = Wire.read();
    data[1] = Wire.read();
  }

  // Convert the data
  float humidity  = ((data[0] * 256.0) + data[1]);
  humidity = ((125 * humidity) / 65536.0) - 6;

  return humidity;
}

float readTemp() {
  unsigned int data[2];
  // Start I2C transmission
  Wire.beginTransmission(Addr);
  // Send temperature measurement command, NO HOLD MASTER
  Wire.write(0xF3);
  // Stop I2C transmission
  Wire.endTransmission();
  delay(500);

  // Request 2 bytes of data
  Wire.requestFrom(Addr, 2);

  // Read 2 bytes of data
  // temp msb, temp lsb
  if (Wire.available() == 2)
  {
    data[0] = Wire.read();
    data[1] = Wire.read();
  }

  // Convert the data
  float temp  = ((data[0] * 256.0) + data[1]);
  float cTemp = ((175.72 * temp) / 65536.0) - 46.85;

  return cTemp;
}

void writeSI7021toFirebase() {
  float humidity = readHumidity();
  float temp = readTemp();

  writeSensorJson.set("roomTemp", temp);
  writeSensorJson.set("roomHum", humidity);
  while (true) {
    if (Firebase.set(writeSensorData, WRITE_PATH, writeSensorJson))   {
      Serial.println("PASSED");
      Serial.println("PATH: " + writeSensorData.dataPath());
      Serial.println("TYPE: " + writeSensorData.dataType());
      break;
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + writeSensorData.errorReason());
      Serial.println("------------------------------------");
      Serial.println();
    }
    delay(300);
  }
}
