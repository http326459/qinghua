/**
 * Created by hxsd on 2016/8/17.
 */
myapp.controller("teachingCtrl",function($scope,$http) {
    var url = "json/teaching.json";
    $http.get(url).success(function (data) {
        $scope.teaching = data;
        console.log(teaching.length);
    }).finally(function () {
        $scope.$broadcast("scroll.refreshComplete");
    });
    $scope.data={
        showDelete:false,
        showReorder:false
    };
    $scope.loadMore=function(){
        $http.get(url).success(function(data){
            Array.prototype.push.apply($scope.teaching,data);
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    };
});