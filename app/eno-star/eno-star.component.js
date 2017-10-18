export const enoStar = {
    bindings: {
        note: '=?',
    },
    controller: function EnoStarCtrl($scope, $element, $compile) {
        'ngInject';

        $scope.$watch('$ctrl.note', () => {
            console.log('EnoStarCtrl', arguments);
            console.log('ctrl.note', this.note);
            let html = '';
            let note = this.note || 3;
            note = (note > 5) ? 5 : note;
            note = (note < 0) ? 0 : note;
            for (let i = 0; i < note; i++) {
                html += '<img ng-click="$ctrl.update(' + (i + 1) + ')" src="eno-star/img/yellow_star.png">';
            }
            for (let i = note; i < 5; i++) {
                html += `<img ng-click="$ctrl.update(${i + 1})" src="eno-star/img/white_star.png">`;
            }
            $element.html(html);
            $compile($element.contents())($scope);
        });

        this.update = (newNote) => {
            console.log('update', newNote);
            this.note = newNote;
        };

    }
};

