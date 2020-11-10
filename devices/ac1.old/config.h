#include "firebase_utils.h"

#define MODE_HEAT kTcl112AcHeat
#define MODE_COOL kTcl112AcCool
#define MODE_DRY kTcl112AcDry
#define MODE_FAN kTcl112AcFan
#define MODE_AUTO kTcl112AcAuto

#define FAN_LOW kTcl112AcFanLow
#define FAN_MED kTcl112AcFanMed
#define FAN_HI kTcl112AcFanHigh
#define FAN_AUTO kTcl112AcFanAuto

#define SWING_OFF kTcl112AcSwingVOff
#define SWING_ON kTcl112AcSwingVOn
#define LEGACY_TIMING_INFO false

#define WIFI_SSID "Boki"
#define WIFI_PASSWORD "01011962"
#define FIREBASE_HOST "home-control-fe934.firebaseio.com"
#define FIREBASE_AUTH "xb8aOxIGC98rd6yakBe9bPY071KcRR9A8lutj8em"

#define DEVICE_NAME "Living Room Air Conditioner"
#define DEVICE_TYPE "AC"
#define UID "v63Qpf3GRATe5Jgz8XPHmp2tU0E2"
const char DEVICE_ID[21] = "-MK3zOf-KoaDLGkBwYEr";


const uint16_t kRecvPin = 2;
const uint16_t kIrLed = 4;  // ESP8266 GPIO pin to use. Recommended: 4 (D2).

const uint8_t kTimeout = 50;
const uint16_t kMinUnknownSize = 12;
