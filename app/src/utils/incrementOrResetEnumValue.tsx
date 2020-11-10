import {FanTypes, ModeTypes} from "../constants/air-conditioner";

export default (value: number, enumType: typeof ModeTypes | typeof FanTypes): number => {
    const length = Object.keys(enumType).length / 2;
    return (value === length - 1)
        ? 0
        : value + 1;
};
