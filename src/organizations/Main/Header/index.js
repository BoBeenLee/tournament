import { first } from '../../../utils/FPUtils';
import { reset } from '../../../actions/round';
import { afterAllRender } from '../../../hof/withMainRender';
import { getState, getRoundLength } from '../../../store';
import { findFirstClassName } from '../../../utils/DOMUtils';
import './header.scss';

class Header {
    constructor(className) {
        this.state = {
            className
        };
        this.render();

        const Root = this.getHeader();
        const BtnReset = findFirstClassName('btn-reset', Root);
        BtnReset.addEventListener("click", this.onReset);
    }

    getHeader = () => findFirstClassName(this.state.className, document);

    onReset = afterAllRender(reset);

    render() {
        const { roundIndex, matchIndex } = getState();
        const Root = this.getHeader();
        Root.innerHTML = require('./header.html');

        const Title = findFirstClassName('title', Root);
        Title.innerHTML = (`${matchIndex / 2 + 1} Match`);

        const RoundTournament = findFirstClassName('round-tournament', Root);
        RoundTournament.innerHTML = `${getRoundLength(roundIndex)} 강`;
    }
}

export const render = (className) => {
    new Header(className);
};