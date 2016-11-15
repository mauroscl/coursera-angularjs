(function () {
"use strict";

angular.module('public')
.component('menuItemSummarized', {
  templateUrl: 'src/public/menu-item/menu-item-summarized.html',
  bindings: {
    menuItem: '<'
  },
  controller: MenuItemSummarizedController
});


MenuItemSummarizedController.$inject = ['ApiPath'];
function MenuItemSummarizedController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
