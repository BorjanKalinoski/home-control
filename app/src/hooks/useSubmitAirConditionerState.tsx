import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {devicesActions} from "../store/actions";

export default function useSubmitAirConditionerState(referencePath: string, acState: any) {
    const componentDidMount = useRef(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (componentDidMount.current) {
            componentDidMount.current = false;
        } else {
            // dispatch(devicesActions.submitAcState(referencePath, acState));
        }
    }, [acState, componentDidMount]);
}
