import {FanTypes, ModeTypes} from "../constants/air-conditioner";
import AirConditioner from "../models/AirConditioner";

export default (state: AirConditioner): AirConditioner => {
    let fan = state.fan;
    let mode = state.mode;
    switch (state.fan) {
        case FanTypes.AUTO:
            fan = 0;
            break;
        case FanTypes.LOW:
            fan = 2;
            break;
        case FanTypes.MED:
            fan = 3;
            break;
        case FanTypes.HI:
            fan = 5;
            break;
    }
    switch (state.mode) {
        case ModeTypes.COOL:
            mode = 3;
            break;
        case ModeTypes.HEAT:
            mode = 1;
            break;
        case ModeTypes.DRY:
            mode = 2;
            break;
        case ModeTypes.FAN:
            mode = 7;
            break;
        case ModeTypes.AUTO:
            mode = 8;
            break;
    }
    return {
        ...state,
        fan,
        mode
    };
};
