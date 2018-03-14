import { first } from './FPUtils';

export const findFirstClassName = (className, DOM = document) => {
    // return compose1(DOM.getElementsByClassName, first)(className);
    return first(DOM.getElementsByClassName(className));
}
