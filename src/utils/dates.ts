import { months, meses } from "../consts/months";

export const getCurrentMonthName = () => {
    return meses[new Date().getMonth()];
};
