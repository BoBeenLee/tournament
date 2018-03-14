//compose(reset, allRender)();

export const after = (afterFunc) => (func) => (...args) => {
    let res = func(...args);
    afterFunc();
    return res;
};

export const reducer = (arr, acc, init) => {
    let res = !init ? arr[0] : init;
    for (let i = !init ? 1 : 0; i < arr.length; i++) {
        res = acc(res, arr[i]);
    }
    return res;
};
export const compose1 = (func1, func2) => {
    return (...args) => func1(func2(...args));
}

export const compose = (...args) => {
    return reducer(args, (resFunc, func) => compose1(resFunc, func));
};

export const first = (arr) => {
    return arr[0];
};

export const last = (arr = []) => {
    return arr[arr.length - 1];
}

export const foreach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
};

export const map = (arr, callback) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = callback(arr[i], i);
    }
    return res;
}

export const partial = (func, ...args1) => {
    return (...args2) => {
        return func(...args1, ...args2);
    }
};