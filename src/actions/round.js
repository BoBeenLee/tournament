import { compose } from '../utils/FPUtils';
import { initState, setState, getState } from '../store';

const state = getState();

export const randomMatch = () => {
    const { rounds, roundIndex } = getState();
    const randomArr = [];
    // console.log((rounds.length / (rounds.length - roundIndex + 1)));
    const removeArr = [...rounds[1]];

    while (!(removeArr.length === 0)) {
        randomArr.push(removeArr.pop());
    }
    setState('rounds', {
        // ...rounds,
        [1]: randomArr
    });
};

export const reset = compose(randomMatch, initState);

const calcRound = (moveNum) => () => {
    const { matchIndex, roundIndex, lastRoundIndex, rounds } = getState();
    // -1 강이동
    if (matchIndex + moveNum < 0) {
        if (roundIndex - 1 < 1) {
            return;
        }
        setState('matchIndex', rounds[roundIndex - 1].length - moveNum);
        setState('roundIndex', roundIndex - 1);
        return;
    }
    // +1 강이동
    if (matchIndex + moveNum > rounds[roundIndex].length) {
        setState('matchIndex', 0);
        setState('roundIndex', roundIndex + 1);
        return;
    }
    // console.log(roundIndex, moveNum);
    // 매치 이동
    setState('matchIndex', matchIndex + moveNum);
}

export const nextRound = calcRound(2);
export const prevRound = calcRound(-2);

export const selectedRound = (selectedId) => {
    const state = getState();
    state.selectedIdealTypesIds.push(selectedId);
};

export const unselectedRound = () => {
    const state = getState();
    state.selectedIdealTypesIds.pop();
};