import { first } from '../../../utils/FPUtils';
import { moveResultPage } from '../../../hof/withResultRender';
import { afterAllRender } from '../../../hof/withMainRender';
import { nextRound, prevRound } from '../../../actions/round';
import { isFinish, isFirst, getSelectedMatch } from '../../../store';
import { findFirstClassName } from '../../../utils/DOMUtils';
import './footer.scss';

class Footer {
    constructor(className) {
        this.state = {
            className
        };
        this.render();

        const Root = this.getFooter();
        const BtnPrev = findFirstClassName('btn-prev', Root);
        BtnPrev.addEventListener("click", this.onPrev);
        const BtnNext = findFirstClassName('btn-next', Root);
        BtnNext.addEventListener("click", isFinish() ? this.onFinish : this.onNext);
    }

    getFooter = () => findFirstClassName(this.state.className, document);

    onNext = afterAllRender(nextRound);
    onPrev = afterAllRender(prevRound);
    onFinish = moveResultPage;

    render() {
        const Root = this.getFooter();
        const matchItem = getSelectedMatch();

        Root.innerHTML = require('./footer.html');

        const BtnPrev = findFirstClassName('btn-prev', Root);
        BtnPrev.disabled = isFirst();
        const BtnNext = findFirstClassName('btn-next', Root);
        BtnNext.innerHTML = isFinish() ? 'Finish' : 'Next';
        BtnNext.disabled = !isFinish() && !matchItem.id; // !!matchItem.id;
    }
}

export const render = (className) => {
    new Footer(className);
};