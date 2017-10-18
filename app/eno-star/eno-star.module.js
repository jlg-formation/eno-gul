import { enoStar } from './eno-star.component.js';
import { enoOldStar } from './eno-old-star.directive.js';

angular.module('eno-star', [])
     .component('enoStar', enoStar)
     .directive('enoOldStar', enoOldStar);
