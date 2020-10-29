import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {devicesActions} from "../redux/actions";

export default function useSubmitAirConditionerState(deviceId: string, state: any) {

    const componentDidMount = useRef(true);
    const canSubmit = useRef(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (componentDidMount.current) {
            componentDidMount.current = false;
        } else {
            if (!canSubmit.current) {
                canSubmit.current = true;
            } else {
                console.log('sabmit')
                dispatch(devicesActions.submitAirConditionerState(deviceId, state));
            }
        }
    }, [state, componentDidMount, deviceId]);
};
