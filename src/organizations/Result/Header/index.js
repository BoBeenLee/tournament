import { getState, isFinishByIndex } from '../../../store';
import { reset } from '../../../actions/round';
import { moveMainPage } from '../../../hof/withMainRender';
import { foreach, after } from '../../../utils/FPUtils';
import { findFirstClassName, findLastClassName } from '../../../utils/DOMUtils';
import './header.scss';

class Header {
    constructor(className) {
        this.state = {
            className,
        };
        this.render();

        const Root = this.getHeader();
        const BtnHome = findFirstClassName('btn-home', Root);
        BtnHome.addEventListener("click", this.onHome);
    }

    getHeader = () => findFirstClassName(this.state.className, document);

    onHome = after(moveMainPage)(reset);

    render() {
        const Root = this.getHeader();
        Root.innerHTML = require('./header.html');
    }
}


export const render = (className) => {
    new Header(className);
};