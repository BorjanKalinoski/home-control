import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {devicesActions} from "../redux/actions";

export default function useSubmitAirConditionerState(path: string, state: any) {
    const componentDidMount = useRef(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (componentDidMount.current) {
            componentDidMount.current = false;
        } else {
            dispatch(devicesActions.submitAirConditionerState(path, state));
        }
    }, [state, componentDidMount, path]);
}
