(function () {
    angular
        .module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {

        var list = this;
        list.searchTerm = '';
        list.found = [];

        list.narrowIt = function () {
            MenuSearchService.getMatchedMenuItems(list.searchTerm)
                .then(function (items) {
                    list.found = items;
                })
                .catch(function (error) {
                    console.log(error);
                });
        };

        list.removeItem = function (itemIndex) {
            list.found = list.found.splice(itemIndex, 1);
        };

    }

    function FoundItemsDirective() {

        var ddo = {
            templateUrl: 'itemsloaderindicator.template.html',
            //template: 'eSta é e uma diretiva',
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        };

        return ddo;

    }


    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        service.getMatchedMenuItems = function (searchTerm) {

            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json')
                .then(function (result) {

                    var allItems = result.data.menu_items;
                    // process result and only keep items that match
                    var foundItems = allItems.filter(function (item) {
                        return item.description.indexOf(searchTerm) > -1;
                    });

                    // return processed items
                    return foundItems;
                });

        }

    }


})();
