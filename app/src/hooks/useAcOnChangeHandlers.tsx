import {useCallback} from "react";
import {incrementOrResetEnumValue} from "../utils";
import {FanTypes, ModeTypes} from "../constants/air-conditioner";

const isTurboModeAvailable = (mode: number): boolean => {
    return (mode === ModeTypes.HEAT || mode === ModeTypes.COOL || mode === ModeTypes.FAN);
};

const resetFanOnStateChange = (mode: number, fan: number): number => {
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
        fan = resetFanOnStateChange(mode, fan);
        mergeAndDispatchState({
            mode,
            fan,
            turbo: isTurboModeAvailable(mode) && turbo
        });
    }, [mergeAndDispatchState, state]);

    const onFanChangeHandler = useCallback(() => {
        let {mode, fan} = state;

        fan = incrementOrResetEnumValue(fan, FanTypes);
        fan = resetFanOnStateChange(mode, fan);

        mergeAndDispatchState({
            mode,
            fan
        });
    }, [mergeAndDispatchState, state]);

    const onTempChangeHandler = useCallback((temp: number) => {
        if (temp >= 16 && temp <= 31) {
            mergeAndDispatchState({
                temp
            });
        }
    }, [mergeAndDispatchState, state]);

    const onBooleanChangeHandler = useCallback((action: any) => {
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
    }, [mergeAndDispatchState, state]);

    return {
        onTempChangeHandler,
        onBooleanChangeHandler,
        onFanChangeHandler,
        onModeChangeHandler
    }
};
