import { afterAllRender } from '../../hof/withMainRender';
import './main.scss';

class MainPage {
    constructor() {
        this.state = {};
        this.render();
    }
    render = afterAllRender(() => {
        document.getElementById("app").innerHTML = require('./main.html');
    });
}


export const render = () => {
    new MainPage();
};