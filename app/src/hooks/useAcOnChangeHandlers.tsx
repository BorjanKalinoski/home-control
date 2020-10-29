import {useCallback} from "react";
import {incrementOrResetEnumValue, isTurboModeAvailable, resetFanOnModeChange} from "../utils";
import {FanTypes, ModeTypes} from "../constants/air-conditioner";

export default function useAcOnChangeHandlers(dispatchState: any, state: any) {

    const onModeChangeHandler = useCallback(() => {
        let {mode, turbo, fan} = state;

        mode = incrementOrResetEnumValue(mode, ModeTypes);
        fan = resetFanOnModeChange(fan,mode);
        dispatchState({
            mode,
            fan,
            turbo: isTurboModeAvailable(mode) && turbo
        });
    }, [dispatchState, state.mode, state.fan, state.turbo]);

    const onFanChangeHandler = useCallback(() => {
        let fan;
        fan = incrementOrResetEnumValue(state.fan, FanTypes);
        fan = resetFanOnModeChange(fan, state.mode);
        if (fan !== state.fan) {
            dispatchState({
                mode: state.mode,
                fan
            });
        }
    }, [dispatchState, state.mode, state.fan]);


    const onTempChangeHandler = useCallback((temp: number) => {
        if (temp >= 16 && temp <= 31) {
            dispatchState({
                temp
            });
        }
    }, [dispatchState]);

    const onBooleanChangeHandler = useCallback((action: 'turbo' | 'swing' | 'power') => {
        const {mode} = state;
        if (action !== 'turbo') {
            dispatchState({
                [action]: !state[action]
            });
        } else if (isTurboModeAvailable(mode)) {
            dispatchState({
                [action]: !state[action]
            });
        }
    }, [dispatchState, state.mode]);

    return {
        onTempChangeHandler,
        onBooleanChangeHandler,
        onFanChangeHandler,
        onModeChangeHandler
    }
};
