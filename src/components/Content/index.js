import { getState, getCurrentRound } from '../../store';
import { afterAllRender } from '../../hof/withMainRender';
import { first, partial } from '../../utils/FPUtils';
import { findFirstClassName } from '../../utils/DOMUtils';
import './content.scss';

class ContentBox {
    constructor(className) {
        this.state = {
            className: className
        };
        this.render(className);

        const { rounds } = getState();

        const Content = this.getContent();
        const LeftFace = first(Content.getElementsByClassName('left_face'));
        LeftFace.addEventListener("click", partial(this.onSelected, 1));

        const RightFace = first(Content.getElementsByClassName('right_face'));
        RightFace.addEventListener("click", partial(this.onSelected, 2));
    }

    getContent = () => findFirstClassName(this.state.className, document);

    onSelected = afterAllRender((id) => {
        console.log(id);
    });

    render() {
        const { className } = this.state;
        const rounds = getCurrentRound();

        const Content = this.getContent();
        Content.innerHTML = require('./content.html');

        const LeftImage = findFirstClassName('left_face_image', Content);
        LeftImage.src = rounds[0].url;

        const RightImage = findFirstClassName('right_face_image', Content);
        RightImage.src = rounds[1].url;
    }
}

export const render = (className) => {
    new ContentBox(className);
};