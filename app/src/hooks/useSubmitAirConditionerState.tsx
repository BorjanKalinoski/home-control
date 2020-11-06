import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {devicesActions} from "../redux/actions";

export default function useSubmitAirConditionerState(deviceId: string, state: any) {

    const firstRender = useRef(false);
    const secondRender = useRef(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (secondRender.current) {
            dispatch(devicesActions.submitAirConditionerState(deviceId, state));
        }else {
            if (!firstRender.current) {
                firstRender.current = true;
            } else if (!secondRender.current) {
                secondRender.current = true;
            }
        }

    }, [state, firstRender,secondRender, secondRender,deviceId]);
};
