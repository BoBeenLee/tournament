import { partial, reducer, compose } from './utils/FPUtils';
import './store';
import indexHTML from './index.html';
import './index.scss';
import { reset } from './actions/round';
import { afterAllRender } from './hof/withRender';
// import { render as renderHeader } from './components/Header';
// import { render as renderContent } from './components/Content';
// import { render as renderFooter } from './components/Footer';

afterAllRender(() => {
    document.getElementById("app").innerHTML = indexHTML;
    reset();
})();
// renderHeader('tournament_header_box');
// renderContent('tournament_content_box');
// renderFooter('tournament_footer_box');

// const add3 = partial((a, b) => a + b, 3);
// const multiple = (a, b) => a * b;
// console.log(compose(add3, multiple)(5, 3));
// console.log(reducer([1, 2, 3, 4, 5], (res, num) => res + num, 5));
console.log(global.state);