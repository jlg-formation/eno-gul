export const enoStar = {
    bindings: {
        note: '='
    },
    controller: function EnoStarCtrl($element) {
        'ngInject';
        

        this.$onInit = () => {
            console.log('EnoStarCtrl', arguments);
            console.log('ctrl.note', this.note);
            let html = '';
            const note = this.note || 3;
            for (let i = 0; i < note; i++) {
                html += '<img src="eno-star/img/yellow_star.png">';
            }
            for (let i = note; i < 5; i++) {
                html += '<img src="eno-star/img/white_star.png">';
            }
            $element.html(html);
        };

    }
};

