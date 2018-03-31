
var app = angular.module('mainApp',['ngMaterial','ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl : "main/home.html"

        })
        .when("/adultCare", {
            templateUrl : "templates/adult-care/adult-care.html",
            controller:'AdultCareController'

        }).when("/pediatricCare", {
        templateUrl : "templates/pediatric-care/pediatric-care.html",
        controller:'PediatricCareController'

         }).when("/patientCareResources", {
        templateUrl : "templates/patient-care-resources/patient-care-resources.html",
        controller:'PatientCareResourcesController'

        }).when("/patientDataSites", {
        templateUrl : "templates/patient-data-sites/patient-data-sites.html",
        controller:'PatientDataSitesController'

    }).when("/continuingEducation", {
        templateUrl : "templates/continuing-education/continuing-education.html",
        controller:'ContinuingEducationController'

    }).when("/managementResources", {
        templateUrl : "templates/management-resources/management-resources.html",
        controller:'ManagementResourcesController'

    }).when("/referenceShelf", {
        templateUrl : "templates/reference-shelf/reference-shelf.html",
        controller:'ReferenceShelfController'

    }).otherwise({
            redirectTo: '/home'
        });
});


app.controller('SideNavController',function($scope,$mdSidenav,$mdMedia){
    $scope.selectedIndex = null;
    $scope.menuItems = [
        {
            "href":"#/",
            "linkText":"HOME"
        },
        {
            "href":"#adultCare",
            "linkText":"ADULT CARE"
        },
        {
            "href":"#pediatricCare",
            "linkText":"PEDIATRIC CARE"
        },
        {
            "href":"#patientCareResources",
            "linkText":"PATIENT CARE RESOURCES"
        },
        {
            "href":"#patientDataSites",
            "linkText":"PATIENT DATA SITES"
        },
        {
            "href":"#referenceShelf",
            "linkText":"REFERENCE SHELF"
        },
        {
            "href":"#continuingEducation",
            "linkText":"CONTINUING EDUCATION"
        },
        {
            "href":"#managementResources",
            "linkText":"MANAGEMENT RESOURCES"
        }

    ],
        $scope.otherMenuItems = [

            {
                "href":"#",
                "linkText":"DRUG FORMULATORY",
                icon:'settings_cell'
            },
            {
                "href":"#",
                "linkText":"CLINICAL PHONEBOOK",
                icon:'settings_cell'
            },
            {
                "href":"#",
                "linkText":"ASK A LIBRARIAN",
                icon:'settings_cell'
            },
            {
                "href":"#",
                "linkText":"HELP",
                icon:'help'
            },
            {
                "href":"#",
                "linkText":"FEEDBACK",
                icon:'feedback'
            }

        ]

    $scope.highlight = function (index) {


        if ($scope.selectedIndex === null) {
            $scope.selectedIndex = index;
        }
        else if ($scope.selectedIndex === index) {
            $scope.selectedIndex = null;
        }
        else {
            $scope.selectedIndex = index;
        }



        var aElem = document.getElementById("menuLink"+index);
        aElem.click();

        if(!$mdMedia('gt-sm'))
         $mdSidenav('left').toggle();


    }
});

app.controller('MainController', function($scope, $mdSidenav) {
    $scope.isSidenavOpen = false;
    $scope.showMobileMainHeader=true;
    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };


});

