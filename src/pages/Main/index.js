import { afterAllRender } from '../../hof/withMainRender';
import './Main.scss';

class MainPage {
    constructor() {
        this.state = {};
        this.render();
    }
    render = afterAllRender(() => {
        document.getElementById("app").innerHTML = require('./Main.html');
    });
}


export const render = () => {
    new MainPage();
};