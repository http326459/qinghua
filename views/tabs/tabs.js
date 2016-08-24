/**
 * Created by hxsd on 2016/8/17.
 */
angular.module("myapp").controller("tabsCtrl",function($scope,$ionicHistory){
    $scope.retum = function(){
        $ionicHistory.goBack();
    };
});