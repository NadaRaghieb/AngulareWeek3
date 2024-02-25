// (function () {
//   'use strict';

//   angular.module('NarrowItDownApp', [])
//     .controller('NarrowItDownController', NarrowItDownController)
//     .service('MenuSearchService', MenuSearchService)
//     .directive('foundItems', FoundItemsDirective)
//     .constant('ApiBasePath', 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json');

//   NarrowItDownController.$inject = ['MenuSearchService'];
//   function NarrowItDownController(MenuSearchService) {
//     var narrowCtrl = this;
//     narrowCtrl.searchTerm = '';
//     narrowCtrl.foundItems = [];

//     narrowCtrl.narrowItDown = function () {
//       if (narrowCtrl.searchTerm.trim() === '') {
//         narrowCtrl.foundItems = [];
//         return;
//       }

//       var promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);
//       promise.then(function (foundItems) {
//         narrowCtrl.foundItems = foundItems;
//       });
//     };

//     narrowCtrl.removeItem = function (index) {
//       narrowCtrl.foundItems.splice(index, 1);
//     };
//   }

//   MenuSearchService.$inject = ['$http', 'ApiBasePath'];
//   function MenuSearchService($http, ApiBasePath) {
//     var service = this;

//     service.getMatchedMenuItems = function (searchTerm) {
//       return $http({
//         method: 'GET',
//         url: ApiBasePath
//       }).then(function (response) {
//         var menuItems = response.data;
//         var foundItems = [];

//         for (var i = 0; i < menuItems.length; i++) {
//           var description = menuItems[i].description;
//           if (description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
//             foundItems.push(menuItems[i]);
//           }
//         }

//         return foundItems;
//       });
//     };
//   }

//   function FoundItemsDirective() {
//     var ddo = {
//       restrict: 'E',
//       templateUrl: './loader/foundItems.html',
//       scope: {
//         foundItems: '<',
//         onRemove: '&'
//       },
//       controller: FoundItemsDirectiveController,
//       controllerAs: 'foundCtrl',
//       bindToController: true
//     };

//     return ddo;
//   }

//   function FoundItemsDirectiveController() {
//     var foundCtrl = this;
//   }

// })();

// (function() {
//     'use strict';
  
//     angular.module('LunchCheck', [])
//     .controller('LunchCheckController', ['$scope', function($scope) {
//       $scope.lunchMenu = "";
//       $scope.message = "";
  
//       $scope.checkLunch = function() {
//         if (!$scope.lunchMenu) {
//           $scope.message = "Please enter data first";
//           return;
//         }
  
//         var items = $scope.lunchMenu.split(',');
//         items = items.filter(function(item) {
//           return item.trim() !== ""; 
//         });
  
//         var numberOfItems = items.length;
  
//         if (numberOfItems <= 3) {
//           $scope.message = "Enjoy!";
//         } else if (numberOfItems <= 5) {
//           $scope.message = "That is kinda lot of food!";
//         } else {
//           $scope.message = "Whoa, that's way too much food!";
//         }
//       };
//     }]);
//   })();