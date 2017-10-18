export const enoOldStar = function ($compile) {
    'ngInject';
    return {
        restrict: 'E',
        transclude: true,
        controller: function EnoOldStarCtrl() {
            console.log('EnoOldStarCtrl', this);
            this.$onInit = () => {
                console.log('EnoOldStarCtrl $onInit', this);

            };
        },
        controllerAs: '$ctrl',
        scope: {
            note: '=?',
        },
        compile: function () {
            console.log('compile', arguments);


            return {
                pre: function () {
                    console.log('pre link', arguments);
                },
                post: function (scope, element, attrs, ctrl, transclude) {
                    console.log('post link', arguments, transclude());

                    scope.$watch('note', () => {
                        console.log('EnoStarCtrl', arguments);
                        console.log('note', scope.note);
                        let html = '';
                        let note = scope.note || 3;
                        note = (note > 5) ? 5 : note;
                        note = (note < 0) ? 0 : note;
                        for (let i = 0; i < note; i++) {
                            html += '<img ng-click="update(' + (i + 1) + ')" src="eno-star/img/yellow_star.png">';
                        }
                        for (let i = note; i < 5; i++) {
                            html += `<img ng-click="update(${i + 1})" src="eno-star/img/white_star.png">`;
                        }
                        element.html(html);
                        const linkFn = $compile(element.contents());
                        linkFn(scope);
                    });
            
                    scope.update = (newNote) => {
                        console.log('update', newNote);
                        scope.note = newNote;
                    };
                }
            };
        }

    };

};