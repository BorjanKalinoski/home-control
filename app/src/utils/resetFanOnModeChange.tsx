import {FanTypes, ModeTypes} from "../constants/air-conditioner";

export default (fan: number, mode: number): number => {
    if (mode === ModeTypes.DRY) {
        return FanTypes.AUTO;
    } else if (mode === ModeTypes.FAN && fan == FanTypes.AUTO) {
        return FanTypes.LOW;
    }
    return fan;
};
