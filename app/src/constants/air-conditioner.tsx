import AirConditioner from "../models/AirConditioner";

export enum ModeTypes {
    HEAT,
    COOL,
    DRY,
    FAN,
    AUTO
}
export enum FanTypes {
    LOW,
    MED,
    HI,
    AUTO,
}

export const initialAcState: AirConditioner = {
    date: new Date().getTime(),
    mode: ModeTypes.HEAT,
    temp: 23,
    fan: FanTypes.LOW,
    swing: false,
    turbo: false,
    power: false
};
