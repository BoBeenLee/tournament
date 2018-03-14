import { partial, reducer, compose } from './utils/FPUtils';
import './store';
import './index.scss';
import { reset } from './actions/round';
import { render as mainRender } from './pages/Main';

reset();
mainRender();
console.log(global.state);

// const add3 = partial((a, b) => a + b, 3);
// const multiple = (a, b) => a * b;
// console.log(compose(add3, multiple)(5, 3));
// console.log(reducer([1, 2, 3, 4, 5], (res, num) => res + num, 5));
