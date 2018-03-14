import { foreach } from '../../utils/FPUtils';
import { findFirstClassName, findLastClassName } from '../../utils/DOMUtils';
import './imageList.scss';

class ImageList {
    constructor(className, items) {
        this.state = {
            className,
            items
        };

        this.render();
    }

    getImageList = () => findFirstClassName(this.state.className, document);

    render() {
        const { items } = this.state;
        const Root = this.getImageList();
        const Ul = document.createElement('ul');
        Ul.className += 'image-list';

        foreach(items, (item) => {
            const Li = document.createElement("li");
            Li.innerHTML = `<img src="${item.url}" alt="" />`;
            Ul.appendChild(Li);
        });
        Root.appendChild(Ul);
    }
}


export const render = (className, items) => {
    new ImageList(className, items);
};