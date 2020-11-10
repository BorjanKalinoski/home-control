import {ModeTypes} from "../constants/air-conditioner";

export default  (mode: number): boolean => {
    return (mode === ModeTypes.HEAT || mode === ModeTypes.COOL || mode === ModeTypes.FAN);
};
