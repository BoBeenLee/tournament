import { render as imageListRender } from '../../components/ImageList';
import { getState } from '../../store';
import './result.scss';

class ResultPage {
    constructor() {
        this.state = {};
        this.render();
    }
    render = () => {
        document.getElementById("app").innerHTML = require('./result.html');

        const { rounds, roundIndex } = getState();

        for (let i = 1; i <= roundIndex; i++) {
            imageListRender("tournament-content-box", rounds[i]);
        }
    };
}


export const render = () => {
    new ResultPage();
};