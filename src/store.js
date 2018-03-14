import { datas } from './datas';

export const initialState = {
    roundIndex: 1,
    matchIndex: 0,
    lastRoundIndex: 4,
    selectedIdealTypesIds: [],
    rounds: {
        1: [ ...datas ],
        2: [],
        3: [],
        4: []
    }
};

export const initState = () => {
    global.state = {
        ...initialState
    };
}

export const getState = () => global.state;

export const getCurrentRound = () => {
    const { rounds, roundIndex, matchIndex } = getState();
    return rounds[roundIndex].slice(matchIndex, matchIndex + 2);
}

export const setState = (name, value) => {
    global.state[name] = value;
};

export const isFirst = () => {
    const { roundIndex } = global.state;
    return roundIndex === 1;
}

export const isFinish = () => {
    const { roundIndex } = global.state;
    return roundIndex === 5;
};
