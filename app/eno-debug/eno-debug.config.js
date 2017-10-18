export const config = function($provide) {
    'ngInject';
    $provide.decorator('$rootScope', function ($delegate) {
        var emit = $delegate.$emit;

        $delegate.$emit = (...args) => {
            args.unshift('$rootScope.$emit event');
            console.log.apply(console, args);
            args.shift();
            emit.apply($delegate, args);
        };

        return $delegate;
    });
};
