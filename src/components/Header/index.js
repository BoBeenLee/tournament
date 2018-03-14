import { first } from '../../utils/FPUtils';
import { reset } from '../../actions/round';
import { afterAllRender } from '../../hof/withMainRender';
import { getState } from '../../store';
import './header.scss';

class HeaderBox {
    constructor(className) {
        this.state = {
            className
        };
        this.render();
    }

    getHeader = () => first(document.getElementsByClassName(this.state.className));

    onReset = afterAllRender(reset);

    render() {
        const { roundIndex } = getState();
        const Header = this.getHeader();

        Header.innerHTML = require('./header.html');
        const Title = first(Header.getElementsByClassName('title'));
        Title.innerHTML = (`${roundIndex} Round`);
    }
}

export const render = (className) => {
    new HeaderBox(className);
};