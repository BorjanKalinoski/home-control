void readAcStateFromFirebase() {

  while (true)
  {
    yield();
    if (Firebase.getJSON(firebaseData, PATH + "/app_to_ino")) {

      FirebaseJson &json = firebaseData.jsonObject();
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
        double roundedDate = floor(data.doubleValue);
        if (previousDate != roundedDate) {
          stateHasChanged = true;
          previousDate = roundedDate;
        }
      }
      break;
    } else {
      Serial.println(firebaseData.errorReason());
    }
    delay(300);
  }
}

void writeAcStateToFirebase() {
  firebaseJson.clear();
  firebaseJson.set("power", ac.getPower());
  firebaseJson.set("mode", (int) ac.getMode());
  firebaseJson.set("swing", ac.getSwingVertical());
  firebaseJson.set("fan", (int) ac.getFan());
  firebaseJson.set("temp", ac.getTemp());
  firebaseJson.set("turbo", ac.getTurbo());
  firebaseJson.set("date", previousDate);

  while (true) {

    yield();
    if (Firebase.set(firebaseData, PATH + "/ino_to_app/ac", firebaseJson))   {
      Serial.println("Wrote ac");
      break;
    }
    else {
      Serial.println("AC failed: " + firebaseData.errorReason());
    }
    delay(300);
  }
}

void readLastAcStateFromFirebase() {//TODO change naming
  while (true)
  {
    yield();
    if (Firebase.getDouble(firebaseData, PATH + "/ino_to_app/ac/date")) {
      if (firebaseData.dataType() == "double") {
        previousDate = floor(firebaseData.doubleData());
      }
      break;
    } else {
      Serial.println("Date error:" + firebaseData.errorReason());
    }
    delay(300);
  }
}
