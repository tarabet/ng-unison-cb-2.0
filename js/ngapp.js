var ngApp = angular.module('ngApp', [
    'ngRoute',
    'appControllers'
]);

ngApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'js/partials/front-page-tmpl.html',
                controller: 'homepageCtrl',
                data: { requireLogin: false},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/productsandservices', {
                templateUrl: 'js/partials/products-and-services-tmpl.html',
                controller: 'prodsnsrvcsCtrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/products', {
                templateUrl: 'js/partials/products-tmpl.html',
                controller: 'prodsCtrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/safe-rent', {
                templateUrl: 'js/partials/safe-rent-tmpl.html',
                controller: 'safeRentCtrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/maininformsection', {
                templateUrl: 'js/partials/main-inform-section-tmpl.html',
                controller: 'maininfosection-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/catalognews', {
                templateUrl: 'js/partials/catalog-news-tmpl.html',
                controller: 'catalognews-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/catalogspecialoffers', {
                templateUrl: 'js/partials/catalog-special-offers-tmpl.html',
                controller: 'catalogspecoffers-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/promocorpcustomers', {
                templateUrl: 'js/partials/promo-corp-customers-tmpl.html',
                controller: 'promocorpcustomers-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/contacts', {
                templateUrl: 'js/partials/contacts-tmpl.html',
                controller: 'contacts-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/news', {
                templateUrl: 'js/partials/news-tmpl.html',
                controller: 'news-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/specialoffer', {
                templateUrl: 'js/partials/special-offer-tmpl.html',
                controller: 'specialoffer-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/catalognotifications', {
                templateUrl: 'js/partials/catalog-notifications-tmpl.html',
                controller: 'catalognotifications-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/userprofile', {
                templateUrl: 'js/partials/user-profile-tmpl.html',
                controller: 'userprofile-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 100);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/catalogrequests', {
                templateUrl: 'js/partials/catalog-requests-tmpl.html',
                controller: 'catalogrequests-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 100);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/faq', {
                templateUrl: 'js/partials/faq-tmpl.html',
                controller: 'faq-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 100);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/product', {
                templateUrl: 'js/partials/product-tmpl.html',
                controller: 'product-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 100);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/order', {
                templateUrl: 'js/partials/order-tmpl.html',
                controller: 'order-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 100);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/needs', {
                templateUrl: 'js/partials/needs-tmpl.html',
                controller: 'needs-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 100);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/departmentsmap', {
                templateUrl: 'js/partials/departments-map-tmpl.html',
                controller: 'departmentsmap-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 100);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/departmentsmaplist', {
                templateUrl: 'js/partials/departments-map-list-tmpl.html',
                controller: 'departmentsmaplist-ctrl',
                data: { requireLogin: true},
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 100);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            otherwise({
                redirectTo: '/',
                data: { requireLogin: false}
            });

        // use the HTML5 History API
        //Убираем "#" из всех URL
        // $locationProvider.html5Mode(true); //TODO: Not working right now. Needs revising :(

    }]);

ngApp.run(['$rootScope','$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (next.$$route.data.requireLogin === true) {
            console.log('THIS SECTION REQUIRES LOGIN');
            console.log('Current location is:',$location.path());
            //event.preventDefault();
        } else {
            console.log('NO LOGIN REQUIRED ON THIS PAGE');
            console.log('Current location is:',$location.path());
        }
    });
    $rootScope.username = 'TEMPORARY USERNAME';

}]);