angular.module('boiz.services', [])

.factory('AddIt', function($firebaseArray) {
  // Might use a resource here that returns a JSON array
  var itemsref = new Firebase("https://incandescent-fire-7026.firebaseio.com/items");
    return $firebaseArray(itemsref);

});
