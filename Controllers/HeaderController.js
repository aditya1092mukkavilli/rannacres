var headerController  = angular.module('RealEstate');
headerController.controller('headerCtrl', ['$scope','$location','$anchorScroll','$state', '$window','$rootScope',function($scope,$location,$anchorScroll,$state,$window,$rootScope){
 
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
     });

    $scope.NavigateTobuy =function(path)
    {
        var location = $location.path();
        if(location =='/main/home')
        {
            $location.hash("buy");
            $anchorScroll();
        }
        else
        {
            $state.go('main.homepage');
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }

    };

    $scope.NavigateToRent = function()
    {
        var location = $location.path();
        if(location =='/main/home')
        {
            $location.hash("rent");
            $anchorScroll();
        }
        else
        {
            $state.go('main.homepage');
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }

    $scope.NavigateToSell = function()
    {
        var location = $location.path();
        if(location =='/main/home')
        {
            $location.hash("sell");
             $anchorScroll();
        }
        else
        {
            $state.go('main.homepage');
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }

    $scope.NavigateToCommerial = function()
    {
        var location = $location.path();
        if(location =='/main/home')
        {
          $location.hash("Commerial");
          $anchorScroll();
        }
        else{
            $state.go('main.homepage');
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }

    $scope.NavigateToProjects = function()
    {
        var location = $location.path();
        if(location =='/main/home')
        {
         $location.hash("Projects");
         $anchorScroll();
        }
        else
        {
            $state.go('main.homepage');
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }

}]);