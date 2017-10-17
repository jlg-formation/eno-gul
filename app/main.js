import 'angular';
import 'angular/angular-csp.css';
import './style.scss';

import enoHeaderHtml from './tmpl/eno-header.html';
import enoFooterHtml from './tmpl/eno-footer.html';

const app = angular.module('main', []);

app.component('enoHeader', {
    template: enoHeaderHtml
});
app.component('enoFooter', {
    template: enoFooterHtml
});
