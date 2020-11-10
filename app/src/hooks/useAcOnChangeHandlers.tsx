import {useCallback} from "react";
import {incrementOrResetEnumValue, isTurboModeAvailable, resetFanOnModeChange} from "../utils";
import {FanTypes, ModeTypes} from "../constants/air-conditioner";

export default function useAcOnChangeHandlers(state: any, dispatch: any) {

    const onModeChangeHandler = useCallback(() => {
        let {mode, turbo, fan} = state;

        mode = incrementOrResetEnumValue(mode, ModeTypes);
        fan = resetFanOnModeChange(fan,mode);
        dispatch({
            mode,
            fan,
            turbo: isTurboModeAvailable(mode) && turbo
        });
    }, [dispatch, state.mode, state.fan, state.turbo]);

    const onFanChangeHandler = useCallback(() => {
        let fan;
        fan = incrementOrResetEnumValue(state.fan, FanTypes);
        fan = resetFanOnModeChange(fan, state.mode);
        if (fan !== state.fan) {
            dispatch({
                mode: state.mode,
                fan
            });
        }
    }, [dispatch, state.mode, state.fan]);


    const onTempChangeHandler = useCallback((temp: number) => {
        if (temp >= 16 && temp <= 31) {
            dispatch({
                temp
            });
        }
    }, [dispatch]);

    const onBooleanChangeHandler = useCallback((action: 'turbo' | 'swing' | 'power') => {
        const {mode} = state;
        if (action !== 'turbo') {
            dispatch({
                [action]: !state[action]
            });
        } else if (isTurboModeAvailable(mode)) {
            dispatch({
                [action]: !state[action]
            });
        }
    }, [dispatch, state.mode]);

    return {
        onTempChangeHandler,
        onBooleanChangeHandler,
        onFanChangeHandler,
        onModeChangeHandler
    }
};
