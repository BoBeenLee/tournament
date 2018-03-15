import { isFinish, getState, getCurrentRound, getSelectedMatch } from '../../../store';
import { selectedRound, unselectedRound } from '../../../actions/round';
import { afterAllRender } from '../../../hof/withMainRender';
import { first, partial } from '../../../utils/FPUtils';
import { findFirstClassName } from '../../../utils/DOMUtils';
import './content.scss';

class Content {
    constructor(className) {
        this.state = {
            className: className
        };
        this.render(className);

        const rounds = getCurrentRound();
        const Root = this.getContent();

        if (isFinish()) {
            return;
        }
        const LeftFace = first(Root.getElementsByClassName('left-face'));
        LeftFace.addEventListener("click", partial(this.onSelected, rounds[0]));
        const RightFace = first(Root.getElementsByClassName('right-face'));
        RightFace.addEventListener("click", partial(this.onSelected, rounds[1]));
    }

    getContent = () => findFirstClassName(this.state.className, document);

    onSelected = afterAllRender((item) => {
        const matchItem = getSelectedMatch();

        if (matchItem.id === item.id) {
            unselectedRound();
            return;
        }
        selectedRound(item);
        // console.log(item);
    });

    onUnSelected = afterAllRender(() => {
        unselectedRound();
    });

    render() {
        const { className } = this.state;
        const rounds = getCurrentRound();
        const matchItem = getSelectedMatch();

        const Root = this.getContent();
        Root.innerHTML = require('./content.html');

        const LeftImage = findFirstClassName('left-face-image', Root);
        LeftImage.src = rounds[0].url;
        LeftImage.setAttribute("active", matchItem.id === rounds[0].id);

        if (isFinish()) {
            const RemoveContent = findFirstClassName('tournament-content', Root);
            RemoveContent.removeChild(findFirstClassName('right-face', Root));
            RemoveContent.removeChild(findFirstClassName('vs', Root));
            return;
        }
        const RightImage = findFirstClassName('right-face-image', Root);
        RightImage.src = rounds[1].url;
        RightImage.setAttribute("active", matchItem.id === rounds[1].id);
    }
}

export const render = (className) => {
    new Content(className);
};