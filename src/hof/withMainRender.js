import { compose, after } from '../utils/FPUtils';
import { render as renderMain } from '../pages/Main';
import { render as renderHeader } from '../organizations/Main/Header';
import { render as renderContent } from '../organizations/Main/Content';
import { render as renderFooter } from '../organizations/Main/Footer';

export const moveMainPage = () => renderMain();
export const afterHeaderRender = after(() => renderHeader('tournament-header-box'));
export const afterContentRender = after(() => renderContent('tournament-content-box'));
export const afterFooterRender = after(() => renderFooter('tournament-footer-box'));

export const afterAllRender = compose(afterHeaderRender, afterContentRender, afterFooterRender);