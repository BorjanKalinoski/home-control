import {useCallback} from "react";
import {incrementOrResetEnumValue} from "../utils";
import {FanTypes, ModeTypes} from "../constants/air-conditioner";

const isTurboModeAvailable = (mode: number): boolean => {
    return (mode === ModeTypes.HEAT || mode === ModeTypes.COOL || mode === ModeTypes.FAN);
};

const resetFanOnModeChange = (fan: number, mode: number): number => {
    if (mode === ModeTypes.DRY) {
        return FanTypes.AUTO;
    } else if (mode === ModeTypes.FAN && fan == FanTypes.AUTO) {
        return FanTypes.LOW;
    }
    return fan;
};

export default function useAcOnChangeHandlers(mergeAndDispatchState: any, state: any) {

    const onModeChangeHandler = useCallback(() => {
        let {mode, turbo, fan} = state;

        mode = incrementOrResetEnumValue(mode, ModeTypes);
        fan = resetFanOnModeChange(fan,mode);
        mergeAndDispatchState({
            mode,
            fan,
            turbo: isTurboModeAvailable(mode) && turbo
        });
    }, [mergeAndDispatchState, state.mode, state.fan, state.turbo]);

    const onFanChangeHandler = useCallback(() => {
        let fan;
        fan = incrementOrResetEnumValue(state.fan, FanTypes);
        fan = resetFanOnModeChange(fan, state.mode);
        if (fan !== state.fan) {
            mergeAndDispatchState({
                mode: state.mode,
                fan
            });
        }
    }, [mergeAndDispatchState, state.mode, state.fan]);


    const onTempChangeHandler = useCallback((temp: number) => {
        if (temp >= 16 && temp <= 31) {
            mergeAndDispatchState({
                temp
            });
        }
    }, [mergeAndDispatchState]);

    const onBooleanChangeHandler = useCallback((action: 'turbo' | 'swing' | 'power') => {
        const {mode} = state;
        if (action !== 'turbo') {
            mergeAndDispatchState({
                [action]: !state[action]
            });
        } else if (isTurboModeAvailable(mode)) {
            mergeAndDispatchState({
                [action]: !state[action]
            });
        }
    }, [mergeAndDispatchState, state.mode]);

    return {
        onTempChangeHandler,
        onBooleanChangeHandler,
        onFanChangeHandler,
        onModeChangeHandler
    }
};
