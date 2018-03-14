import { compose, after } from '../utils/FPUtils';
import { initState, setState, getState, isFirst, isFinish } from '../store';
import { callValue } from '../utils/ObjectUtils';

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

const calcRound = (moveNum) => {
    const { matchIndex, roundIndex, rounds } = getState();
    setState('matchIndex', matchIndex + moveNum);
    // console.log(getState());
}

export const nextRound = () => {
    const moveNum = 2;
    const { matchIndex, roundIndex, rounds } = getState();
    if (matchIndex + moveNum >= rounds[roundIndex].length) {
        setState('matchIndex', 0);
        setState('roundIndex', roundIndex + 1);
        // console.log(getState());
        return;
    }
    calcRound(moveNum);
};

export const prevRound = () => {
    const moveNum = -2;
    const { matchIndex, roundIndex, rounds } = getState();
    if (matchIndex + moveNum < 0) {
        if (isFirst()) {
            return;
        }
        setState('matchIndex', rounds[roundIndex - 1].length + moveNum);
        setState('roundIndex', roundIndex - 1);
        return;
    }
    calcRound(moveNum);
};

export const selectedRound = (selectedItem) => {
    const { matchIndex, roundIndex, rounds } = getState();
    let selectedRounds = callValue(() => rounds[roundIndex + 1].slice(0, matchIndex / 2), []);
    let restRounds = callValue(() => rounds[roundIndex + 1].slice(matchIndex / 2 + 1), []);

    setState('rounds', {
        ...rounds,
        [roundIndex + 1]: [...selectedRounds, selectedItem]
    });
    // console.log(getState());
    // state.selectedIdealTypesIds.push(selectedId);
};

export const unselectedRound = () => {
    const { matchIndex, roundIndex, rounds } = getState();
    let selectedRounds = callValue(() => rounds[roundIndex + 1].slice(0, matchIndex / 2), []);
    let restRounds = callValue(() => rounds[roundIndex + 1].slice(matchIndex / 2 + 1), []);
    setState('rounds', {
        ...rounds,
        [roundIndex + 1]: [...selectedRounds, null]
    });
    // console.log(getState());
};