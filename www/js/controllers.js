angular.module('boiz.controllers', [])

.controller('DashCtrl', function($scope, $firebaseArray) {

    $scope.$on('$ionicView.enter', function(){
      var ref= new Firebase("https://incandescent-fire-7026.firebaseio.com/items");
      var calitems = $firebaseArray(ref);
      var totalamt = 0;
      calitems.$loaded().then(function(){
        angular.forEach(calitems, function(item){
          // console.log(item.amount);
          totalamt = totalamt + item.amount;
          $scope.finalamt = totalamt;
          $scope.myshare = totalamt/4;
        })
      })
    })



    //while(i<$scope.calitems.length){
    //   totalamt = totalamt + $scope.calitems.items[i].amount;
    //}


  })

.controller('ChatsCtrl', function($scope, $state, AddIt) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

$scope.addItem = function(){
  $state.go('newitem')
}
    $scope.listitems = AddIt;

})

.controller('NewCtrl', function($scope, $state, AddIt){
    $scope.data={};
    $scope.addNew = function(){
      $scope.items = AddIt;
      $scope.items.$add($scope.data).then(function(){
        $state.go('tab.dash');
      });
    }, function(err){
      console.log(err);
    }
  })
