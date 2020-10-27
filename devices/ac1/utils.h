void readStateFromFirebase() {

  Serial.println("waawwa!");
  if (Firebase.getJSON(readData, READ_PATH)) {
    FirebaseJsonData jsonData;
    FirebaseJson *readJson = readData.jsonObjectPtr();
    size_t len = readJson->iteratorBegin();
    String key, value = "";
    int type = 0;
    for (size_t i = 0; i < len; i++) {
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
      } else if (key == "date") {
        readJson->get(jsonData, "date");
        if (prevDate != jsonData.doubleValue) {
          prevDate = jsonData.doubleValue;
          stateHasChanged = true;
        }
      }
    }
    Serial.println("ENd");
    readJson->iteratorEnd();

    Serial.println("ENd");
  } else {
    Serial.println("nesto se desava");
    Serial.println(readData.errorReason());
  }
}

void writeState() {
  Serial.println("majka be");
  Serial.println(ac.getPower());
  writeJson.set("power", ac.getPower());
  writeJson.set("mode", (int) ac.getMode());
  writeJson.set("swing", ac.getSwingVertical());
  writeJson.set("fan", (int) ac.getFan());
  writeJson.set("temp", ac.getTemp());
  writeJson.set("turbo", ac.getTurbo());
  writeJson.set("date", (int)prevDate);

  if (Firebase.set(writeData, WRITE_PATH, writeJson))   {
    Serial.println("PASSED");
    Serial.println("PATH: " + writeData.dataPath());
    Serial.println("TYPE: " + writeData.dataType());
  }
  else {
    Serial.println("FAILED");
    Serial.println("REASON: " + writeData.errorReason());
    Serial.println("------------------------------------");
    Serial.println();
  }
}
