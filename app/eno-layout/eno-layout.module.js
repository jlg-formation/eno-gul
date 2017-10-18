import { enoHeader } from './eno-header.component.js';
import { enoFooter } from './eno-footer.component.js';

angular.module('eno-layout', [])
     .component('enoHeader', enoHeader)
     .component('enoFooter', enoFooter);
