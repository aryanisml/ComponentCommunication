(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('myapp')
        .component('childComponent2', {
            templateUrl:'childComponent2.html',
            //templateUrl: 'templateUrl',
            controller: ControllerChild2,
            controllerAs: '$ctrl',
            bindings: {
               enterValueArray:'<',
               view:'<'
            },
        });

   // ControllerController.$inject = ['dependency1'];
    function ControllerChild2() {
        var $ctrl = this;
        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) {
            console.log(changesObj);
         };
        $ctrl.$onDestroy = function() { };
    }
})();