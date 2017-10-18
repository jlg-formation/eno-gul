export const enoOldStar = function () {
    return {
        transclude: true,
        controller: function EnoOldStarCtrl() {
            console.log('EnoOldStarCtrl', this);
            this.$onInit = () => {
                console.log('EnoOldStarCtrl $onInit', this);

            };
        },
        compile: function () {
            console.log('compile', arguments);


            return {
                pre: function () {
                    console.log('pre link', arguments);
                },
                post: function (scope, element, attrs, ctrl, transclude) {
                    console.log('post link', arguments, transclude());

                }
            };
        }

    };

};