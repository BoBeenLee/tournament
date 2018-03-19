import { partial, reducer, compose } from './utils/FPUtils';
import './store';
import './index.scss';
import { reset } from './actions/round';
import { render as mainRender } from './pages/Main';
import { render as resultRender } from './pages/Result';

reset();
mainRender();
// console.log(global.state);