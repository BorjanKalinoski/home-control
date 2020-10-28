void readStateFromFirebase() {
  Serial.println("Trying to read data!");//Do this in while true?
  while (true) //Read from firebase until you get a response
  {
    if (Firebase.getJSON(readData, READ_PATH)) {
      Serial.println("read data!");
      FirebaseJsonData jsonData;
      FirebaseJson *readJson = readData.jsonObjectPtr();
      size_t len = readJson->iteratorBegin();
      String key, value = "";
      int type = 0;
      for (size_t i = 0; i < len; i++) { //Best way to parse the json from Firebase, set AC state accordingly
        readJson->iteratorGet(i, type, key, value);
        if (key == "power") {
          readJson->get(jsonData, "power");
          ac.setPower(jsonData.boolValue);
        } else if (key == "swing") {
          readJson->get(jsonData, "swing");
          ac.setSwingVertical(jsonData.boolValue);
        } else if (key == "temp") {
          readJson->get(jsonData, "temp");
          ac.setTemp(jsonData.intValue);
        } else if (key == "mode") {
          readJson->get(jsonData, "mode");
          ac.setMode(jsonData.intValue);
        } else if (key == "fan") {
          readJson->get(jsonData, "fan");
          ac.setMode(jsonData.intValue);
        } else if (key == "turbo") {
          readJson->get(jsonData, "turbo");
          ac.setTurbo(jsonData.boolValue);
        } else if (key == "date") { //if the date we got from RTDB is different from our stored date, stateHasChanged=true;
          readJson->get(jsonData, "date");
          Serial.println("Comparing: ");
          Serial.println(jsonData.doubleValue);
          Serial.println(prevDate);
          if (prevDate != jsonData.doubleValue) {
            prevDate = jsonData.doubleValue;
            stateHasChanged = true;
            Serial.println("State has changed");
          } else {
            Serial.println("State wont change");
          }
        }
      }
      readJson->iteratorEnd();
      break;
    } else {
      Serial.println("Error reading data!");
      Serial.println(readData.errorReason());
    }
    delay(300);
  }
}

void writeState() { //Check why others are not updated
  Serial.println("TUKA ALAHU EKBER!!");
  Serial.println(prevDate);
  writeJson.set("power", ac.getPower());
  writeJson.set("mode", (int) ac.getMode());
  writeJson.set("swing", ac.getSwingVertical());
  writeJson.set("fan", (int) ac.getFan());
  writeJson.set("temp", ac.getTemp());
  writeJson.set("turbo", ac.getTurbo());
  writeJson.set("date", prevDate);

  while (true) { //We want to be sure that a response has been sent back to the user
    Serial.println("Sending data back");
    if (Firebase.set(writeData, WRITE_PATH, writeJson))   {
      Serial.println("PASSED");
      Serial.println("PATH: " + writeData.dataPath());
      Serial.println("TYPE: " + writeData.dataType());
      break;
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + writeData.errorReason());
      Serial.println("------------------------------------");
      Serial.println();
    }
    delay(300);
  }

}
