import { first } from './FPUtils';

export const findFirstClassName = (className, DOM = document) => {
    // return compose1(DOM.getElementsByClassName, first)(className);
    return first(DOM.getElementsByClassName(className));
}

export const findLastClassName = (className, DOM = document) => {
    // return compose1(DOM.getElementsByClassName, first)(className);
    return last(DOM.getElementsByClassName(className));
}
