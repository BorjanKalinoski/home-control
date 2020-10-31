import AirConditioner from "../models/AirConditioner";
import {FanTypes, ModeTypes} from "../constants/air-conditioner";

export default (state:any): AirConditioner => {
    let fan = state.fan;
    let mode = state.mode;
    switch (state.fan) {
        case 0:
            fan = FanTypes.AUTO;
            break;
        case 2:
            fan = FanTypes.LOW;
            break;
        case 3:
            fan = FanTypes.MED;
            break;
        case 5:
            fan = FanTypes.HI;
            break;
    }
    switch (state.mode) {
        case 3:
            mode = ModeTypes.COOL;
            break;
        case 1:
            mode = ModeTypes.HEAT;
            break;
        case 2:
            mode=ModeTypes.DRY;
            break;
        case 7:
            mode = ModeTypes.FAN;
            break;
        case 8:
            mode = ModeTypes.AUTO;
            break;
    }
    return {
        ...state,
        fan,
        mode
    };
};
