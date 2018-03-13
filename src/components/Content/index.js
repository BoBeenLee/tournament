import { getState } from '../../store';
import { afterAllRender } from '../../hof/withRender';
import { first, partial } from '../../utils/FPUtils';
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

    getContent = () => first(document.getElementsByClassName(this.state.className));

    onSelected = afterAllRender((id) => {
        console.log(id);
    });

    render() {
        const { className } = this.state;
        const { rounds } = getState();

        const Content = this.getContent();
        Content.innerHTML = require('./content.html');

        const LeftImage = first(Content.getElementsByClassName('left_face_image'));
        LeftImage.src = rounds[1][0].url;

        const RightImage = first(Content.getElementsByClassName('right_face_image'));
        RightImage.src = rounds[1][1].url;
    }
}

export const render = (className) => {
    new ContentBox(className);
};