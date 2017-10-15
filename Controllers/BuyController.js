var buyController  = angular.module('RealEstate');
buyController.controller('buyCtrl', ['$scope','$location','$anchorScroll', function($scope,$location,$anchorScroll){

    $scope.displayBuy={};

    $scope.displayBuy.fullDescription = [{

        description:"London villas is the most exclusive property in the pearls city of Hyderabad. The location of this property is something that no one can offer which along with the best of amenities makes SMR Vinay Iconia truly iconic. The modern estate management ensures total security, lush green surroundings, traffic management to deliver a living experience like no other. Located in the most happening destination, SMRVinayIconia has unmatched connectivity to IT hubs in Madhapur and Gachibowli, shopping malls, fine dining and schools through ORR and wide roads in a few minutes drive.Iconia is back in competent hands! One of the largest and prestigious residential projects, SMR Vinay Iconia is taking shape to change the lifestyle perceptions in Hyderabad. The sprawling magnum opus is a skyline of 11 towers in 22 acres offering 2465 apartments to be a landmark in the global destination of Kondapur, Gachibowli. The integrated development of open green spaces, amenities, recreation and apartment spaces in futuristic designs give its residents a world of comfort and convenience.",
        pricing: " We are having 1, 2, 3, 4, 5 bed rooms and luxious villas for all the people. It will cost you only 2200 Sft effordable for common man. We are providing facilities like Gym, Club house, Tennies and Swimming pool",
        contactDetails:[{ Name:"Krishna",
                          PhoneNo:"9700929563",
                          office:"Near Botanical Gardens, Hi-Tech City",
        }],
        images:[{
                    buyimage01:"./images/buydetails-01.jpg",
                    buyimage02:"./images/buydetails-02.jpg"
        }],
    }];
}]);