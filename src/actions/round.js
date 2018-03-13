import { compose } from '../utils/FPUtils';
import { initState, setState, getState } from '../store';

const state = getState();

export const randomMatch = () => {
    const state = getState();
    const randomArr = [];
    const removeArr = [...state.idealTypes];

    while (!(removeArr.length === 0)) {
        randomArr.push(removeArr.pop());
    }
    for (let i = 2; i < randomArr.length; i += 2) {
        state.rounds[i / 2] = randomArr.slice(i - 2, i);
    }
};

export const reset = compose(initState, randomMatch);

const calcRound = (moveNum) => () => {
    const { roundIndex, lastRoundIndex } = getState();
    // console.log(state.roundIndex);
    if (roundIndex + moveNum < 1) {
        return;
    }
    if (roundIndex + moveNum > lastRoundIndex + 1) {
        return;
    }
    console.log(roundIndex, moveNum);
    setState('roundIndex', roundIndex + moveNum);
}

export const nextRound = calcRound(1);
export const prevRound = calcRound(-1);

export const selectedRound = (selectedId) => {
    const state = getState();
    state.selectedIdealTypesIds.push(selectedId);
};

export const unselectedRound = () => {
    const state = getState();
    state.selectedIdealTypesIds.pop();
}