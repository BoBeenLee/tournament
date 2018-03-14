import { compose, after } from '../utils/FPUtils';
import { render as renderHeader } from '../components/Header';
import { render as renderContent } from '../components/Content';
import { render as renderFooter } from '../components/Footer';

export const afterHeaderRender = after(() => renderHeader('tournament_header_box'));
export const afterContentRender = after(() => renderContent('tournament_content_box'));
export const afterFooterRender = after(() => renderFooter('tournament_footer_box'));

export const afterAllRender = compose(afterHeaderRender, afterContentRender, afterFooterRender);