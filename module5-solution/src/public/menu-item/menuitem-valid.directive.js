(function() {
    'use strict';

    angular
        .module('public')
        .directive('menuitemvalid', MenuItemValid);

    MenuItemValid.$inject = ['$q', 'MenuService'];
    function MenuItemValid($q, MenuService) {
        var directive = {
            require: 'ngModel',
            link: link//,
            //restrict: 'A'
        };
        return directive;
        
        function link(scope, element, attrs, ctrl) {

            ctrl.$asyncValidators.menuitemvalid =  function(modelValue, viewValue) {

                if (ctrl.$isEmpty(modelValue)) {
                    return $q.resolve(false);
                }

                var def = $q.defer();   
                
                MenuService.getMenuItem(modelValue.toUpperCase())
                .then(function(){
                    def.resolve(true);
                })
                .catch(function(){
                    def.reject(false);
                });

                return def.promise;
                
            }
        

        }
    }
})();