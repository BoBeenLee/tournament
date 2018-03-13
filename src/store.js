import { datas } from './datas';

export const initialState = {
    roundIndex: 1,
    lastRoundIndex: 4,
    selectedIdealTypesIds: [],
    idealTypes: [
        ...datas
    ],
    rounds: {
        1: [],
        2: [],
        3: [],
        4: []
    }
};

global.state = {
    ...initialState
};

export const initState = () => {
    global.state = {
        ...initialState
    };
}

export const getState = () => global.state;

export const setState = (name, value) => {
    global.state[name] = value;
};

export const isFinish = () => {
    const { roundIndex } = global.state;
    return roundIndex === 5;
};
