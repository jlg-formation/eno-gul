import 'angular';
import 'angular/angular-csp.css';
import './style.css';

const app = angular.module('main', []);

app.component('enoHeader', {
    templateUrl: './tmpl/eno-header.html'
});
app.component('enoFooter', {
    templateUrl: './tmpl/eno-footer.html'
});
