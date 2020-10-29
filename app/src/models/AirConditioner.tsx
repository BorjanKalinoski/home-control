import {FanTypes, ModeTypes} from "../constants/air-conditioner";

export default interface AirConditioner {
    date: number;
    fan: FanTypes;
    mode: ModeTypes
    power: boolean;
    swing: boolean;
    temp: number;
    turbo: boolean;
};
