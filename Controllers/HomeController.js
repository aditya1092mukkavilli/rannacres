var homeController  = angular.module('RealEstate');
homeController.controller('homeCtrl', ['$rootScope','$scope',function($rootScope,$scope){
    
    $scope.details={};
     
    $scope.details.buyDetails = [
        {
            name:"London Villas",
            image:"./images/buy-small03.jpg",
            description:"London is known as one of the most exciting capital of the world...",
            bedrooms:"Villas with 5 bed rooms",
            price:"2200/Sft",
            state:"main.buy"
        },
        {
           name:"Celest Hyderabad",
           image:"./images/buy-small01.jpg",
           description:"Celest is a premier project by the private equity...",
           bedrooms:"2,3,4 bed rooms flats",
           price:"4550/Sft",
           state:"main.buy"
        },
        {
            name:"Vrindavan Mumbai",
            image:"./images/buy-small02.jpg",
            description:"With options ranging from 1 BHK - 4 BHK Apartments...",
            bedrooms:"1,2,3,4,5 bed rooms flats",
            price:"3550/Sft",
            state:"main.buy"
        },
        
    ]

    $scope.details.rentDetails = [
        {
           name:"My Home Jewel Hyderabad",
           image:"./images/rent-small01.jpg",
           description:"High class greated community with facilities...",
           bedrooms:"2 and 3 bed rooms flats with full facilities",
           price:"20000/month",
           state:"main.buy"
        },
        {
            name:"Rainbow Homes Mumbai",
            image:"./images/rent-small02.jpg",
            description:"Middle level rents and with full facilities...",
            bedrooms:"1,2,3,4,5 bed rooms flats",
            price:"10000-20000/month",
            state:"main.buy"
        },
        {
            name:"Kalyan Sai Villas Amaravathi",
            image:"./images/rent-small03.jpg",
            description:"luxury  Villas in a greated community...",
            bedrooms:"Villas with 5 bed rooms",
            price:"50000/month",
            state:"main.buy"
        }
    ]

    $scope.details.sellDetails = [
        {
           name:"Sri Sai Towers Hyderabad",
           image:"./images/sell-small01.jpg",
           description:"High class greated community with facilities...",
           bedrooms:"2 and 3 bed rooms flats with full facilities",
           price:"40 Lakhs",
           state:"main.buy"
        },
        {
            name:"Vivekananda Homes Mumbai",
            image:"./images/sell-small02.jpg",
            description:"Middle level rents and with full facilities...",
            bedrooms:"1,2,3,4,5 bed rooms flats",
            price:"30 Lakhs",
            state:"main.buy"
        },
        {
            name:"New Homes",
            image:"./images/sell-small03.jpg",
            description:"luxury  homes in a greated community...",
            bedrooms:"home with 5 bed rooms",
            price:"60 Lakhs",
            state:"main.buy"
        }
    ]

    $scope.details.commercialDetails = [
        {
           name:"Celest Hyderabad",
           image:"./images/commercial-small01.jpg",
           description:"office faciltity with 50000 Sft...",
           bedrooms:"50000 Sft for software company",
           price:"4 Lakhs/Month",
           state:"main.buy"
        },
        {
            name:"Cyber Towers Mumbai",
            image:"./images/commercial-small02.jpg",
            description:"Near to hytech city...",
            bedrooms:"200000 Sft for company",
            price:"30 Lakhs",
            state:"main.buy"
        },
        {
            name:"Ramanujan IT park",
            image:"./images/commercial-small03.jpg",
            description:"Commercial space for all companies...",
            bedrooms:"100000 Sft for companies",
            price:"60 Lakhs",
            state:"main.buy"
        }
    ]

    $scope.details.projectsDetails = [
        {
           name:"My Home Navadeepa Hyderabad",
           image:"./images/projects-small01.jpg",
           description:"9 towers with all facilities...",
           bedrooms:"1,2,3,4,5 bed room",
           price:"starts from 40 lakhs",
           state:"main.buy"
        },
        {
            name:"Aditya Heights Mumbai",
            image:"./images/projects-small02.jpg",
            description:"Aditya Heights on lake view in madhapur...",
            bedrooms:"3 and 4 bed rooms",
            price:"starts from 50 Lakhs",
            state:"main.buy"
        },
        {
            name:"CA Sky Park",
            image:"./images/projects-small03.jpg",
            description:"New Sky parks in your city...",
            bedrooms:"2 and 3 bed roms",
            price:"stars from 40 Lakhs",
            state:"main.buy"
        }
    ]

}]);