var realestate = angular.module('RealEstate',['ui.router']);


realestate.config(function ($stateProvider,$urlRouterProvider) {
$stateProvider.state('main', {
        url: '/main',
       	templateUrl: 'Templates/HeaderTemplate.html',
       	controller: 'headerCtrl',
       	abstract: true,

    }).state('main.homepage',{
        url: '/home',
        views: {
            'realestate': {
                templateUrl: 'Templates/HomeTemplate.html',
                controller: 'homeCtrl',
            }
        }

    }).state('main.buy',{
        url:'/buy',
        views:{
            'realestate':{
                templateUrl:'Templates/BuyTemplate.html',
                controller:'buyCtrl',
            }
        }
    });
    $urlRouterProvider.otherwise('/main/home');
});