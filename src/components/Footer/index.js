import { first } from '../../utils/FPUtils';
import { afterAllRender } from '../../hof/withMainRender';
import { nextRound, prevRound } from '../../actions/round';
import { isFinish, isFirst } from '../../store';
import './footer.scss';

class FooterBox {
    constructor(className) {
        this.state = {
            className
        };
        this.render();

        const Footer = this.getFooter();
        const BtnNext = first(Footer.getElementsByClassName('btn-next'));
        BtnNext.addEventListener("click", this.onNext);
        const BtnPrev = first(Footer.getElementsByClassName('btn-prev'));
        BtnPrev.addEventListener("click", this.onPrev);
    }

    getFooter = () => first(document.getElementsByClassName(this.state.className));

    onNext = afterAllRender(nextRound);
    onPrev = afterAllRender(prevRound);

    render() {
        const Footer = this.getFooter();
        Footer.innerHTML = require('./footer.html');
        // console.log(Footer.getElementsByClassName('btn-next'));
        const BtnNext = first(Footer.getElementsByClassName('btn-next'));
        BtnNext.innerHTML = isFinish() ? 'Finish' : 'Next';
        const BtnPrev = first(Footer.getElementsByClassName('btn-prev'));
        BtnPrev.setAttribute('disable', isFirst());
    }
}

export const render = (className) => {
    new FooterBox(className);
};