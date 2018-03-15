import { getState, isFinishByIndex } from '../../../store';
import { foreach } from '../../../utils/FPUtils';
import { findFirstClassName, findLastClassName } from '../../../utils/DOMUtils';
import './imageList.scss';

class ImageList {
    constructor(className, roundIndex) {
        this.state = {
            className,
            roundIndex,
            extraWidth: 50
        };
        this.render();
    }

    getImageList = () => findFirstClassName(this.state.className, document);

    render() {
        const { roundIndex, extraWidth } = this.state;
        const { rounds } = getState();
        const items = rounds[roundIndex];

        const Root = this.getImageList();
        const Ul = document.createElement('ul');
        Ul.className += 'image-list';

        // console.log(items);
        if (isFinishByIndex(roundIndex)) {
            this.renderFinish(Root, Ul);
            return;
        }
        for (let i = 0; i < items.length; i += 2) {
            const LeftLi = document.createElement("li");
            LeftLi.innerHTML = `<img src="${items[i].url}" alt="" />`;
            const RightLi = document.createElement("li");
            RightLi.innerHTML = `<img src="${items[i + 1].url}" alt="" />`;
            RightLi.style = `margin-right: ${extraWidth}px`;

            Ul.appendChild(LeftLi);
            Ul.appendChild(this.getDivider(extraWidth));
            Ul.appendChild(RightLi);
        }
        Root.appendChild(Ul);
    }

    renderFinish = (Root, Ul) => {
        const { roundIndex, extraWidth } = this.state;
        const { rounds } = getState();
        const items = rounds[roundIndex];

        const LeftLi = document.createElement("li");
        LeftLi.innerHTML = `<img src="${items[0].url}" alt="" />`;
        LeftLi.style = `margin-right: ${extraWidth}px`;
        Ul.appendChild(LeftLi);
        Root.appendChild(Ul);
    };

    getDivider = (extraWidth) => {
        const { roundIndex } = this.state;
        const DividerLi = document.createElement('li');
        const Horizontal = document.createElement('div');
        Horizontal.className += 'horizontal';
        Horizontal.style = `width: ${(128 + extraWidth) * roundIndex}px;`;

        const Vertical = document.createElement('div');
        Vertical.className += 'vertical';
        Vertical.style = `left: ${((128 + extraWidth) * roundIndex) / 2}px`;
        DividerLi.appendChild(Horizontal);
        DividerLi.appendChild(Vertical);
        return DividerLi;
    };
}


export const render = (className, roundIndex) => {
    new ImageList(className, roundIndex);
};