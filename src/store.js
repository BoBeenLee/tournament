import { datas } from './datas';

export const initialState = {
    roundIndex: 1,
    matchIndex: 0,
    // selectedIdealTypesIds: [],
    rounds: {
        1: [...datas],
    }
};

var handler = {
    set(obj, prop, value) {
        // console.log(obj, prop, value);
        return Reflect.set(...arguments);
    }
};

export const initState = () => {
    global.state = new Proxy({
        ...initialState
    }, handler);
}

export const getState = () => global.state;

export const getCurrentRound = () => {
    const { rounds, roundIndex, matchIndex } = getState();
    return rounds[roundIndex].slice(matchIndex, matchIndex + 2);
}

export const getSelectedMatch = () => {
    const { rounds, roundIndex, matchIndex } = getState();
    if (isRoundsEmpty(roundIndex + 1)) {
        return {};
    }
    return rounds[roundIndex + 1][matchIndex / 2] || {};
};

export const isRoundsEmpty = (roundIndex) => {
    const { rounds } = getState();
    return !rounds[roundIndex];
};

export const getRoundLength = (roundIndex) => {
    const { rounds } = getState();
    return rounds[roundIndex].length;
};

export const setState = (name, value) => {
    global.state[name] = value;
};

export const isFirst = () => {
    const { roundIndex, matchIndex } = global.state;
    return roundIndex === 1 && matchIndex === 0;
}

export const isFinish = () => {
    const { roundIndex, rounds, matchIndex } = global.state;
    return isFinishByIndex(roundIndex);
};

export const isFinishByIndex = (roundIndex) => {
    const { rounds, matchIndex } = global.state;
    return rounds[roundIndex].length === 1;
};