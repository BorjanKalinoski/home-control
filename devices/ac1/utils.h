void readStateFromFirebase() {

  while (true)
  {
    if (Firebase.getJSON(readData, READ_PATH)) {

      FirebaseJson &json = readData.jsonObject();
      FirebaseJsonData data;


      json.get(data, "fan");

      if (data.success) {
        ac.setFan(data.intValue);
      }

      json.get(data, "mode");

      if (data.success) {
        ac.setMode(data.intValue);
      }

      json.get(data, "power");

      if (data.success) {
        ac.setPower(data.boolValue);
      }

      json.get(data, "swing");

      if (data.success) {
        ac.setSwingVertical(data.boolValue);
      }

      json.get(data, "temp");
      if (data.success) {
        ac.setTemp(data.intValue);
      }

      json.get(data, "turbo");

      if (data.success) {
        ac.setTurbo(data.boolValue);
      }

      json.get(data, "date");
      if (data.success) {
        if (prevDate != data.doubleValue) {
          stateHasChanged = true;
          prevDate = data.doubleValue;
        }
      }
      break;
    } else {
      //      Serial.println("Error reading data!");
      //      Serial.println(readData.errorReason());
    }
    delay(300);
  }
}

void writeStateToFirebase() {
  writeJson.set("power", ac.getPower());
  writeJson.set("mode", (int) ac.getMode());
  writeJson.set("swing", ac.getSwingVertical());
  writeJson.set("fan", (int) ac.getFan());
  writeJson.set("temp", ac.getTemp());
  writeJson.set("turbo", ac.getTurbo());
  writeJson.set("date", prevDate);

  while (true) {
    //    Serial.println("Sending data back");
    if (Firebase.set(writeData, WRITE_PATH, writeJson))   {
      //      Serial.println("PASSED");
      //      Serial.println("PATH: " + writeData.dataPath());
      //      Serial.println("TYPE: " + writeData.dataType());
      break;
    }
    else {
      //      Serial.println("FAILED");
      //      Serial.println("REASON: " + writeData.errorReason());
      //      Serial.println("------------------------------------");
      //      Serial.println();
    }
    delay(300);
  }

}
