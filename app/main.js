import './style.scss';

import './eno-layout/eno-layout.module.js';
import './eno-star/eno-star.module.js';
import './eno-debug/eno-debug.module.js';


angular.module('main', ['eno-layout', 'eno-star', 'eno-debug']);

angular.element(() => {
    angular.bootstrap(document, ['main'], { strictDi: true });
});


