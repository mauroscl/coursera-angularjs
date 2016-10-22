(function(){
    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService){

        var buyList = this;
        buyList.items = ShoppingListCheckOffService.getToBuyItems();

        buyList.bought = function (index){
            ShoppingListCheckOffService.markAsBought(index);
        };
        
    }

    function AlreadyBoughtController(ShoppingListCheckOffService) {

        var boughtList = this;
        boughtList.items = ShoppingListCheckOffService.getBoughtItems();

      
    }

    function ShoppingListCheckOffService(){
        var service = this;
        
        service.toBuyItems = [
            {name: 'cookies', quantity: 10},
            {name: 'beers', quantity: 2},
            {name: 'juices', quantity: 3},
            {name: 'coffee', quantity: 1},
            {name: 'breads', quantity: 2}
        ];

        service.boughtItems = [];

        service.getToBuyItems = function(){
            return service.toBuyItems;
        };

        service.getBoughtItems = function(){
            return service.boughtItems;
        };

        service.markAsBought = function(index){

            var boughtItem = service.toBuyItems.splice(index, 1)[0];

            service.boughtItems.push(boughtItem);

        };

    }

})();