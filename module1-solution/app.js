(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){

        $scope.checkLunch = function(){

            var amountDishes = countDishes($scope.dishes);

            changeStatus(amountDishes); 

        };
        
        function countDishes(dishesInWords){

            var separatorCharacter = ',';

            if (!dishesInWords || dishesInWords.length === 0) {
                return 0;
            }
            var dishes = dishesInWords.split(separatorCharacter);

            var dishesWithoutEmpty = dishes.filter(function(item){
                return item.trim().length > 0;
            })

            return dishesWithoutEmpty.length;
        }

        function changeStatus(amountDishes){
            var greaterValueToEnjoy = 3;
            var message;
            if (amountDishes === 0) {
                message = "Please enter data first";
            } else
            if (amountDishes <= greaterValueToEnjoy) {
                message = "Enjoy!";
            } else {
                message = "Too much!";
            }

            $scope.message = message;

        }

    }

})();

